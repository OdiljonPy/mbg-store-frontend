
import {IProduct} from "@/data-types/products/common";
import {createSlice} from "@reduxjs/toolkit";
import {getLocaleStorage, saveLocalStorage} from "@/utils/save-product-localstorage/localStorage";
import {Joan} from "next/dist/compiled/@next/font/dist/google";

const initialState = {
    products : [] as IProduct[]
}

const basketSlices = createSlice({
    name:"basket_store",
    initialState,
    reducers:{
        addProduct : (state, {payload}) =>{
                const product = localStorage.getItem('basket')
                if(product){
                    const activeProduct:IProduct = JSON.parse(product).find((product:IProduct) => product.id === payload.id)
                    const newCount = activeProduct?.count ? activeProduct.count + 1  : 1
                    state.products = state.products.filter((product) => product.id !== payload.id)
                    state.products.push({count:newCount,...payload})
                }
                else{
                    state.products.push({count:1,...payload})
                }
                saveLocalStorage(state.products)
        },

        removeProduct : (state, {payload}) =>{
            const product = localStorage.getItem('basket')
            if(product){
                const activeProduct:IProduct = JSON.parse(product).find((product:IProduct) => product.id === payload.id)
                const newCount = activeProduct?.count ? activeProduct.count - 1  : 0
                if(newCount){
                     state.products.push({count:newCount,...payload})
                }
                else
                     state.products = state.products.filter((product) => product.id !== payload.id)
            }

            saveLocalStorage(state.products)
        }
    }
})

export const {addProduct , removeProduct} = basketSlices.actions
export default basketSlices.reducer