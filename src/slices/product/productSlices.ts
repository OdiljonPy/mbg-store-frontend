import {
  ICommonProductFilter,
  IProductFilter,
  IProductSearchKey,
} from "@/data-types/products/product-filter/product-filter";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// search product title for searchbar
export const fetchSearchKey = createAsyncThunk(
  "search_key",
  async (key: string) => {
    const response = await API.get<IProductSearchKey>(
      `/store/products/chace_name/?q=${key}`,
    );
    return response.data;
  },
);

// filter product
interface IFilterParams {
  q?: string | null;
  category?: number | string;
  min_price?: number | string;
  max_price?: number | string;
  rating?: number;
  discount?: number;
  free_shipping?: boolean | string;
  pickup?: any | null;
  around_the_clock?: boolean | string;
  store?: [any] | any;
  comments?: string | null | boolean;
  available?: boolean;
  sort?: string | null;
  page?: number;
  latitude?: number;
  longitude?: number;
  distance?: number;
}

export const filterProduct = createAsyncThunk(
  "product_filter",
  async (params: IFilterParams) => {
    const data: IFilterParams = {};
    if (params.max_price) data.max_price = params.max_price;
    if (params.min_price) data.min_price = params.min_price;
    if (params.latitude) data.latitude = params.latitude;
    if (params.longitude) data.longitude = params.longitude;
    if (params.distance) data.distance = params.distance;
    if (params.q) data.q = params.q;
    if (params.category) data.category = params.category;
    if (params.rating) data.rating = params.rating;
    if (params.discount && params.discount >= 0)
      data.discount = params.discount;
    if (params.free_shipping) data.free_shipping = params.free_shipping;
    if (params.pickup) data.pickup = params.pickup;
    if (params.around_the_clock)
      data.around_the_clock = params.around_the_clock;
    if (params.store) data.store = params.store;
    if (params.free_shipping) data.free_shipping = true;
    if (params.comments) data.comments = true;
    if (params.available) data.available = true;
    if (params.around_the_clock) data.around_the_clock = true;
    const sort = params.sort ? params.sort : "popular";
    const response = await API.post<ICommonProductFilter>(
      `/store/products/filter/?sort=${sort}&page=1&size=${
        params.page ? params.page : 12
      }`,
      data,
    );
    return response.data;
  },
);

const initialState = {
  entities: {} as IProductFilter,
  product_search: [] as string[],
  loading: false,
  loading_search_key: false,
  error: false,
};

const productSlices = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //filter data
    builder
      .addCase(filterProduct.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(filterProduct.fulfilled, (state, { payload }) => {
        if (payload.ok) {
          state.entities = payload.result;
        }
        state.loading = false;
      })
      .addCase(filterProduct.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });

    //search key
    builder
      .addCase(fetchSearchKey.pending, (state, action) => {
        state.loading_search_key = true;
        state.error = false;
      })
      .addCase(fetchSearchKey.fulfilled, (state, { payload }) => {
        if (payload.ok) {
          state.product_search = payload.result;
        }
        state.loading_search_key = false;
      })
      .addCase(fetchSearchKey.rejected, (state) => {
        state.error = true;
        state.loading_search_key = false;
      });
  },
});

export default productSlices.reducer;
