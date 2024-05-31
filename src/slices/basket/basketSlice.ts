import { IProduct, IStore } from "@/data-types/products/common";
import { IProductAvailable } from "@/data-types/products/product-available/product-available";
import { IBasketSlices } from "@/data-types/slices/basket";
import API from "@/utils/axios/axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IBasketSlices = {
  products: [] as IProduct[],
  not_available: [] as IProduct[],
  store_list: [] as IStore[],
  checkLoad: false,
  checkErr: false,
  totalCountProduct: 0,
  all_prices: 0,
  discount_price: 0,
  delivery_price: 5000,
  cost_price: 0,
  promo_code_price: 0,
  promo_code: {
    discount: 0,
    promocode: "",
  },
};

export const checkProductAvailable = createAsyncThunk(
  "check_product",
  async (products: { id: number; count: number | undefined }[]) => {
    const response = await API.post<IProductAvailable>(
      "/store/products/check/",
      { products },
    );
    return response.data;
  },
);

const basketSlices = createSlice({
  name: "basket_store",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const index = state.products.findIndex(
        (product) => product.id === payload.product.id,
      );
      if (index !== -1) {
        const productCount = state.products[index].count || 0;
        if (
          productCount !== state.products[index].available ||
          (payload.quantity < 0 &&
            productCount == state.products[index].available)
        ) {
          state.products[index].count += payload.quantity;
          state.products = state.products.filter((prod) => {
            if (prod.count) return prod.count > 0;
          });
        }
      } else {
        state.products.push({
          count: payload.quantity,
          ...payload.product,
        });
      }
      state.totalCountProduct = state.products.length;

      // for  store list
      const storeList = state.store_list.findIndex(
        (store) => store.id === payload.product.store.id,
      );
      if (storeList === -1) {
        state.store_list.push(payload.product.store);
      }
    },

    setProducts: (
      state,
      { payload }: PayloadAction<{ product: IProduct; quantity: number }[]>,
    ) => {
      const stores = new Set();

      state.not_available = [];
      state.products = payload.map((product) => {
        stores.add(product.product.store.id);

        return {
          count: product.quantity,
          ...product.product,
        };
      });

      state.totalCountProduct = state.products.length;
    },

    removeProduct: (state, { payload }: { payload: number }) => {
      // for store list
      const activeProduct = state.products.find(
        (product) => product.id == payload,
      );
      const checkInclude = state.store_list.filter(
        (store) => store.id === activeProduct?.store.id,
      );
      if (checkInclude.length === 1) {
        state.store_list = state.store_list.filter(
          (store) => store.id !== activeProduct?.store.id,
        );
      }

      // for products
      state.products = state.products.filter(
        (product) => product.id !== payload,
      );

      // for total product length
      state.totalCountProduct = state.products.length;
    },

    calcPrices: (state) => {
      state.all_prices = state.products.reduce(
        (acc, product) =>
          acc + product.price * (product.count ? product.count : 1),
        0,
      );

      state.discount_price = state.products.reduce(
        (acc, product) =>
          acc +
          (product.discount > 0 ? product.price - product.discount_price : 0) *
            (product.count ? product.count : 1),
        0,
      );

      state.promo_code_price = +(
        (state.all_prices - state.discount_price) *
        state.promo_code.discount *
        0.01
      ).toFixed();

      state.cost_price =
        state.all_prices - state.discount_price - state.promo_code_price;
    },

    promo_code: (state, { payload }) => {
      state.promo_code = payload?.result;
    },

    deletePromoCode: (state) => {
      state.promo_code.discount = 0;
      state.promo_code.promocode = "";
    },

    clearBasket: (state) => {
      state.products = [];
      state.totalCountProduct = 0;
      state.store_list = [];
      state.not_available = [];
      state.all_prices = 0;
      state.discount_price = 0;
      state.delivery_price = 5000;
      state.cost_price = 0;
      state.promo_code_price = 0;
      state.promo_code = {
        discount: 0,
        promocode: "",
      };
    },

    //     not available
    removeFromNotAvailable: (state, { payload }) => {
      state.not_available = state.not_available.filter(
        (product) => product.id !== payload,
      );
      state.totalCountProduct =
        state.products?.length + state.not_available?.length;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkProductAvailable.pending, (state) => {
        state.checkLoad = true;
        state.checkErr = false;
      })
      .addCase(checkProductAvailable.fulfilled, (state, { payload }) => {
        if (payload.ok) {
          state.products = payload.result?.filter(
            (product) => product.available > 0,
          );
          state.products?.forEach((product, idx, array) => {
            if (product?.count) {
              if (product?.count > product?.available) {
                array[idx].count = product.available;
              }
            }
          });
          state.not_available = payload.result?.filter(
            (product) => product.available < 1,
          );
          state.totalCountProduct =
            state.products?.length + state.not_available?.length;
        }
        state.checkLoad = false;
      })
      .addCase(checkProductAvailable.rejected, (state) => {
        state.checkErr = true;
        state.checkLoad = false;
      });
  },
});

export const {
  addProduct,
  removeProduct,
  calcPrices,
  promo_code,
  setProducts,
  deletePromoCode,
  clearBasket,
  removeFromNotAvailable,
} = basketSlices.actions;
export default basketSlices.reducer;
