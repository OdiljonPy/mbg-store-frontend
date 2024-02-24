import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchProduct = createAsyncThunk('products',async (search:string | null) =>{
    const response  = await fetch('https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/store/products/' + `?q=${search ?search :''}`)
    const data = response.json()
    return data
})

const initialState = {
    entities : [],
    loading : true
} as any

const productSlices = createSlice({
    name: 'product',
    initialState,
    reducers:{
        searchProduct : (state,action:{payload:string}) =>{
            console.log(action,"action")
        },
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchProduct.fulfilled, (state,action) =>{
            state.loading = true
            // state.entities.push(...action.payload)
            state.entities = [action.payload]
        })

        builder.addCase(fetchProduct.pending, (state,action) =>{
            state.loading = false
        })
    }
})

export const { searchProduct } = productSlices.actions

export default productSlices.reducer