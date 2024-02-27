import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchProductDiscount = createAsyncThunk('products_discount',async () =>{
    const response  = await fetch('https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/store/products/discount/?size=4')
    const data = response.json()
    return data
})


const initialState = {
    data:[] ,
    loading : true
} as any

const productDiscount = createSlice({
    name: 'product_discount',
    initialState,
    reducers:{},
    extraReducers : (builder) =>{

        builder.addCase(fetchProductDiscount.fulfilled,(state,action) =>{
            state.loading = true
            state.data = [action.payload]
        })
            .addCase(fetchProductDiscount.pending, (state,action) =>{
                state.loading = false
            })


    }
})

export default productDiscount.reducer