import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../slices/product/productSlices"
import productDiscount from "../slices/product/productDiscountSlices"
import productBestSeller from "../slices/product/productBestSellerSlices"
import categorySlices from "@/slices/category/categorySlices";
import productSingleSlices from "@/slices/product/productSingleSlices";
import storiesSlices from "@/slices/all_store/StoriesSlices";

export const makeStore = () => {
    return configureStore({
        reducer: {
            product : productReducer,
            product_discount : productDiscount,
            product_bestseller : productBestSeller,
            category : categorySlices,
            product_single : productSingleSlices,
            all_stories : storiesSlices
        },
    })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch