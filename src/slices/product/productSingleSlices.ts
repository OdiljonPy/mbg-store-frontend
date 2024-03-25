import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";
import {ICommonProduct, IProductInner} from "@/data-types/products/product-inner";

export const fetchProductSingle = createAsyncThunk('product_single', async (id: string[] | string | undefined) => {
    const response = await API.get<ICommonProduct>(`/store/products/${id}/`)
    return response.data
});

const initialState = {
    info : {} as IProductInner,
    loading:false,
    error:false
}

const productSingleInfo = createSlice({
    name : 'product_single',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchProductSingle.pending, (state,action) =>{
                state.loading = true
            })
            .addCase(fetchProductSingle.fulfilled, (state, {payload}) =>{
             if(!payload.ok){
                 throw new Error("Page not found")
             }
            state.info = payload.result
            state.loading = false
        }).addCase(fetchProductSingle.rejected, (state)=>{
            state.error = true
            state.loading = false
        })

    }
})

export default productSingleInfo.reducer