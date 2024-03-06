import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import API from "@/utils/axios/axios";

export const fetchProductBestSeller = createAsyncThunk('product_bestseller', async () => {
    const response = await API.get("/store/products/popular/")
    return response.data
})


const initialState = {
    data: [],
    loading: true
} as any

const productBestSeller = createSlice({
    name: 'product_bestseller',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchProductBestSeller.fulfilled, (state, action) => {
            state.loading = true
            state.data = [action.payload]
        })
            .addCase(fetchProductBestSeller.pending, (state, action) => {
                state.loading = false
            })


    }
})

export default productBestSeller.reducer