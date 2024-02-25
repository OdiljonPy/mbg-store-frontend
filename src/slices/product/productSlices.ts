import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchProduct = createAsyncThunk('products',async (search:string | null) =>{
    const response  = await fetch('https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/store/products/' + `?q=${search ?search :''}`)
    const data = response.json()
    return data
})

interface IFilterParams  {
    q?:string | null,
    category?:number ,
    min_price?:number|string,
    max_price?:number | string,
    rating?:number,
    discount?:number ,
    free_shipping?:boolean | string,
    pickup?:any | null,
    around_the_clock?:boolean | string,
    store?: [any] | any
}
export const filterProduct = createAsyncThunk('filterProduct', async (params:IFilterParams) =>{
    const data:IFilterParams = {}
    if(params.max_price) data.max_price = params.max_price
    if(params.min_price) data.min_price = params.min_price
    if(params.q) data.q = params.q
    if(params.category) data.category = params.category
    if(params.rating) data.rating = params.rating
    if(params.discount) data.discount = params.discount
    if(params.free_shipping) data.free_shipping = params.free_shipping
    if(params.pickup) data.pickup = params.pickup
    if(params.around_the_clock) data.around_the_clock = params.around_the_clock
    if(params.store) data.store = [params.store]
    if(params.free_shipping) data.free_shipping = true
    if(params.around_the_clock) data.around_the_clock = true

    const response = await fetch('https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/store/products/filter/',{
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
//filter data
        builder.addCase(filterProduct.fulfilled,(state,action) =>{
            // state.entities = [action.payload]
            console.log(action,"filter sloces")
        })
    }
})

export const { searchProduct } = productSlices.actions

export default productSlices.reducer