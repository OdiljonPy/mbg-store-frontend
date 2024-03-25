import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import API from "@/utils/axios/axios";
import {ICommonProductDiscount, IProductDiscount} from "@/data-types/products/product-discount/product-discount";

export const fetchProductDiscount = createAsyncThunk('products_discount', async () => {
    const response = await API.get<ICommonProductDiscount>("/store/products/discount/?size=4")
    return response.data
})


const initialState = {
    data: {} as IProductDiscount,
    loading: true,
    error : false
}

const productDiscount = createSlice({
    name: 'product_discount',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductDiscount.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchProductDiscount.fulfilled, (state, {payload}) => {
            if(payload.ok){
                state.data = payload.result
            }
            state.loading = false
        })
            .addCase(fetchProductDiscount.rejected,(state)=>{
                state.error = true
                state.loading = false
            })

    }
})

export default productDiscount.reducer