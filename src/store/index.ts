import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../slices/product/productSlices"
import productDiscount from "../slices/product/productDiscountSlices"
import productBestSeller from "../slices/product/productBestSellerSlices"

export const makeStore = () => {
    return configureStore({
        reducer: {
            product : productReducer,
            product_discount : productDiscount,
            product_bestseller : productBestSeller
        },
    })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch