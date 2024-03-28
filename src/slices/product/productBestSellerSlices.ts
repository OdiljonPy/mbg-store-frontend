import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import API from "@/utils/axios/axios";
import {ICommonProductPopular, IProductPopular} from "@/data-types/products/product-popular/product-popular";

export const fetchProductBestSeller = createAsyncThunk('product_bestseller', async () => {
    const response = await API.get<ICommonProductPopular>("/store/products/popular/")
    return response.data
})


const initialState = {
    data: {} as IProductPopular,
    loading: true,
    error:false
}

const productBestSeller = createSlice({
    name: 'product_bestseller',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(fetchProductBestSeller.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchProductBestSeller.fulfilled, (state, {payload}) => {
            if(payload.ok){
                state.data = payload.result
            }
            state.loading = false
        })
            .addCase(fetchProductBestSeller.rejected, (state)=>{
                state.error = true
                state.loading = false
            })
    }
})

export default productBestSeller.reducer