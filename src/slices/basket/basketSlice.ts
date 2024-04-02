
import {IProduct} from "@/data-types/products/common";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products : [] as IProduct[]
}

const basketSlices = createSlice({
    name:"basket_store",
    initialState,
    reducers:{
        addProduct : (state, {payload}) =>{
            const index = state.products.findIndex(product => product.id === payload.id);
            if (index !== -1) {
                state.products[index].count += payload.count;
            } else {
                state.products.push(payload);
            }
        },

        removeProduct : (state, {payload}) =>{
            state.products = state.products.filter(product => product.id !== payload.id);
        }
    }
})

export const {addProduct , removeProduct} = basketSlices.actions
export default basketSlices.reducer