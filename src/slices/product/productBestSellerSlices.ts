import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchProductBestSeller = createAsyncThunk('product_bestseller',async () =>{
    const response  = await fetch('https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/store/products/popular/')
    const data = response.json()
    return data
})


const initialState = {
    data:[] ,
    loading : true
} as any

 const productBestSeller = createSlice({
    name: 'product_bestseller',
    initialState,
    reducers:{},
    extraReducers : (builder) =>{

        builder.addCase(fetchProductBestSeller.fulfilled,(state,action) =>{
            state.loading = true
            state.data = [action.payload]
        })
            .addCase(fetchProductBestSeller.pending, (state,action) =>{
                state.loading = false
            })


    }
})

export default productBestSeller.reducer