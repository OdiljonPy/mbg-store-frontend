import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import API from "@/utils/axios/axios";

export const fetchProductDiscount = createAsyncThunk('products_discount', async () => {
    const response = await API.get("/store/products/discount/?size=4")
    return response.data
})


const initialState = {
    data: [],
    loading: true
} as any

const productDiscount = createSlice({
    name: 'product_discount',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchProductDiscount.fulfilled, (state, action) => {
            state.loading = true
            state.data = [action.payload]
        })
            .addCase(fetchProductDiscount.pending, (state, action) => {
                state.loading = false
            })


    }
})

export default productDiscount.reducer