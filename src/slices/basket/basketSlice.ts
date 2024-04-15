import {IProduct, IStore} from "@/data-types/products/common";
import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import {IBasketSlices} from "@/data-types/slices/basket";

const initialState:IBasketSlices = {
    products : [] as IProduct[],
    store_list: [] as IStore[],
    totalCountProduct : 0,
    all_prices:0,
    discount_price:0,
    delivery_price:15000,
    cost_price:0,
    promo_code_price:0,
    promo_code:{
        discount:0,
        promocode:""
    }
}

const basketSlices = createSlice({
    name:"basket_store",
    initialState,
    reducers:{
        addProduct : (state, {payload}) =>{
            const index = state.products.findIndex(product => product.id === payload.product.id);
            if (index !== -1) {
                console.log(payload.quantity,"quantity")
                const productCount = state.products[index].count || 0
                if(productCount !== state.products[index].available || (payload.quantity < 0 && productCount == state.products[index].available)){
                    state.products[index].count += payload.quantity;
                }
            } else {
                state.products.push({count:payload.quantity,...payload.product});
            }
            state.totalCountProduct = state.products.length

            // for  store list
            const storeList = state.store_list.findIndex(store=> store.id === payload.product.store.id)
            if(storeList === -1){
                state.store_list.push(payload.product.store)
            }
        },

        setProducts: (state, { payload }: PayloadAction<{product: IProduct; quantity: number}[]>) =>{
            const stores = new Set()

            state.products = payload.map((product) => {

                stores.add(product.product.store.id)

                return {
                    count: product.quantity,
                    ...product.product
                }
            })

            state.totalCountProduct = state.products.length
        },

        removeProduct : (state, {payload}:{payload:number}) =>{
            // for store list
            const activeProduct = state.products.find((product)=> product.id == payload)
            const checkInclude = state.store_list.filter((store)=> store.id === activeProduct?.store.id)
            if(checkInclude.length === 1){
                state.store_list = state.store_list.filter((store)=> store.id !== activeProduct?.store.id)
            }

            // for products
            state.products = state.products.filter(product => product.id !== payload);

            // for total product length
            state.totalCountProduct = state.products.length
        },

        calcPrices:((state)=>{
            state.all_prices = state.products.reduce((acc,product)=> acc + product.price*(product.count ? product.count : 1),0)

            state.discount_price = state.products.reduce((acc,product)=> acc + (product.discount ? product.discount_price ? product.discount_price : 0 : 0)*(product.count ? product.count : 1) ,0)

            state.cost_price = (state.all_prices - state.discount_price)

            state.promo_code_price = state.cost_price * state.promo_code.discount * 0.01
        }),

        promo_code:((state, {payload})=>{
            state.promo_code = payload?.result
        }),

        deletePromoCode:((state)=>{
            state.promo_code.discount = 0
            state.promo_code.promocode = ""
        })
    },

})

export const {addProduct , removeProduct,calcPrices,promo_code,setProducts,deletePromoCode} = basketSlices.actions
export default basketSlices.reducer