import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchProduct = createAsyncThunk('products',async (search:string | null) =>{
    const response  = await fetch('https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/store/products/' + `?q=${search ?search :''}`)
    const data = response.json()
    return data
})

interface IFilterParams  {
    q?:string | null,
    category?:number ,
    min_price?:number,
    max_price?:number,
    rating?:number,
    discount?:number ,
    free_shipping?:boolean | null,
    pickup?:any | null,
    around_the_clock?:any | null,
    store?: [any] | any
}
export const filterProduct = createAsyncThunk('filterProduct', async (params:IFilterParams) =>{
    const data:IFilterParams = {
        q : params.q,
        category:params.category,
        min_price:params.min_price,
        max_price:params.max_price,
        rating:params.rating,
        discount:params.discount,
        free_shipping:params.free_shipping,
        pickup:params.pickup,
        around_the_clock:params.around_the_clock,
        store:[params.store]
    }
    const response = await fetch('https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/store/filter',{
        method : 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
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
            .addCase(fetchProduct.pending, (state,action) =>{
            state.loading = false
        })

        builder.addCase(filterProduct.fulfilled,(state,action) =>{
            // state.entities = [...state.entities,action.payload]
            console.log(action,"filter sloces")
        })
    }
})

export const { searchProduct } = productSlices.actions

export default productSlices.reducer