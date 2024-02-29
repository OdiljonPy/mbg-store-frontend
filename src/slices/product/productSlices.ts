import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

// search product value
export const fetchProduct = createAsyncThunk('products',async (search:string | null) =>{
    const response  = await fetch('https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/store/products/' + `?q=${search ?search :''}`)
    const data = response.json()
    return data
})

// search product title for searchbar
export const fetchSearchKey = createAsyncThunk('search_key',async (key:string)=>{
    const response = await fetch(`https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/store/products/chace_name/?q=${key}`)
    const data = response.json()
    return data
})

// filter product
interface IFilterParams  {
    q?:string | null,
    category?:number ,
    min_price?:number|string,
    max_price?:number | string,
    rating?:number,
    discount?:any,
    free_shipping?:boolean | string,
    pickup?:any | null,
    around_the_clock?:boolean | string,
    store?: [any] | any,
    comments?: string | null | boolean,
    available?:boolean
}
export const filterProduct = createAsyncThunk('product_filter', async (params:IFilterParams) =>{
    const data:IFilterParams = {}
    if(params.max_price) data.max_price = params.max_price
    if(params.min_price) data.min_price = params.min_price
    if(params.q) data.q = params.q
    if(params.category) data.category = params.category
    if(params.rating) data.rating = params.rating
    if(params.discount && params.discount >= 0) data.discount = params.discount
    if(params.free_shipping) data.free_shipping = params.free_shipping
    if(params.pickup) data.pickup = params.pickup
    if(params.around_the_clock) data.around_the_clock = params.around_the_clock
    if(params.store) data.store = params.store
    if(params.free_shipping) data.free_shipping = true
    if(params.comments) data.comments = true
    if(params.available) data.available = true
    if(params.around_the_clock) data.around_the_clock = true

    const response = await fetch('https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/store/products/filter/',{
        method : 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response.json()

})

const initialState = {
    entities : [],
    product_search:[] ,
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

        //filter data
        builder.addCase(filterProduct.fulfilled,(state,action) =>{
            state.loading = true
            state.entities = [action.payload]
        })
            .addCase(filterProduct.pending, (state,action) =>{
                state.loading = false
            })

        // search data
        builder.addCase(fetchProduct.fulfilled, (state,action) =>{
            state.loading = true
            state.entities = [action.payload]
        })
            .addCase(fetchProduct.pending, (state,action) =>{
            state.loading = false
        })

        //search key
        builder.addCase(fetchSearchKey.fulfilled,(state,action) =>{
            state.loading = true
            state.product_search = [action.payload]
            // console.log(action.payload.result)
        })
            .addCase(fetchSearchKey.pending,(state,action)=>{
                state.loading = false
            })

    }
})

export const { searchProduct } = productSlices.actions

export default productSlices.reducer