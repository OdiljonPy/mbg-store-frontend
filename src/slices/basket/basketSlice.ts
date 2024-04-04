import {IProduct} from "@/data-types/products/common";
import {createSlice} from "@reduxjs/toolkit";
import {IBasketSlices} from "@/data-types/slices/basket";

const initialState:IBasketSlices = {
    products : [] as IProduct[],
    totalCountProduct : 0,
    all_prices:0,
    discount_price:0,
    cost_price:0
}

const basketSlices = createSlice({
    name:"basket_store",
    initialState,
    reducers:{
        addProduct : (state, {payload}) =>{
            const index = state.products.findIndex(product => product.id === payload.product.id);
            console.log(payload.quantity,"quantity")
            if (index !== -1) {
                state.products[index].count += payload.quantity;
            } else {
                state.products.push({count:payload.quantity,...payload.product});
            }
            state.totalCountProduct = state.products.length
        },
        removeProduct : (state, {payload}:{payload:number}) =>{
            state.products = state.products.filter(product => product.id !== payload);
            state.totalCountProduct = state.products.length
        },

        calcPrices:((state)=>{
            state.all_prices = state.products.reduce((acc,product)=> acc + product.price*(product.count ? product.count : 1),0)

            state.discount_price = state.products.reduce((acc,product)=> acc + (product.discount ? product.discount_price ? product.discount_price : 0 : 0)*(product.count ? product.count : 1) ,0)

            state.cost_price = state.all_prices - state.discount_price
        })
    }
})

export const {addProduct , removeProduct,calcPrices} = basketSlices.actions
export default basketSlices.reducer