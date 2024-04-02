import {IProduct} from "@/data-types/products/common";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products : [] as IProduct[],
    totalCountProduct : 0
}

const basketSlices = createSlice({
    name:"basket_store",
    initialState,
    reducers:{
        addProduct : (state, {payload}) =>{
            const index = state.products.findIndex(product => product.id === payload.id);
            if (index !== -1) {
                state.products[index].count += payload.quantity;
            } else {
                state.products.push({count:payload.quantity,...payload});
            }
        },
        removeProduct : (state, {payload}:{payload:number}) =>{
            state.products = state.products.filter(product => product.id !== payload);
        },
        countTotalProduct:((state)=>{
            state.totalCountProduct = state.products.length
        })
    }
})

export const {addProduct , removeProduct,countTotalProduct} = basketSlices.actions
export default basketSlices.reducer