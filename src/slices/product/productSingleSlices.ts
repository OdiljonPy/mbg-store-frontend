import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const  fetchProductSingle = createAsyncThunk('product_single',async (id:string[] |string|undefined) =>{
  const response = await  fetch(`https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/store/products/${id}/`)
    const data = response.json()
    return data
})

const initialState = {
    info : {},
    loading:false
} as any

const productSingleInfo = createSlice({
    name : 'product_single',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchProductSingle.fulfilled, (state,action) =>{
            state.loading = true
            state.info = action.payload
        })
            .addCase(fetchProductSingle.pending, (state,action) =>{
                state.loading = false
            })
    }
})

export default productSingleInfo.reducer