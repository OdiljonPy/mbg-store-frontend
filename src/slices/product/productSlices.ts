import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import API from "@/utils/axios/axios";
import {
    ICommonProductFilter,
    IProductFilter,
    IProductSearchKey
} from "@/data-types/products/product-filter/product-filter";

// search product value
export const fetchProduct = createAsyncThunk('products', async (search: string | null) => {
    const response = await API.get<ICommonProductFilter>(`/store/products/?q=${search}`)
    return response.data
})

// search product title for searchbar
export const fetchSearchKey = createAsyncThunk('search_key', async (key: string) => {
    const response = await API.get<IProductSearchKey>(`/store/products/chace_name/?q=${key}`)
    return response.data
})

// filter product
interface IFilterParams {
    q?: string | null,
    category?: number,
    min_price?: number | string,
    max_price?: number | string,
    rating?: number,
    discount?: any,
    free_shipping?: boolean | string,
    pickup?: any | null,
    around_the_clock?: boolean | string,
    store?: [any] | any,
    comments?: string | null | boolean,
    available?: boolean
}

export const filterProduct = createAsyncThunk('product_filter', async (params: IFilterParams) => {
    const data: IFilterParams = {}
    if (params.max_price) data.max_price = params.max_price
    if (params.min_price) data.min_price = params.min_price
    if (params.q) data.q = params.q
    if (params.category) data.category = params.category
    if (params.rating) data.rating = params.rating
    if (params.discount && params.discount >= 0) data.discount = params.discount
    if (params.free_shipping) data.free_shipping = params.free_shipping
    if (params.pickup) data.pickup = params.pickup
    if (params.around_the_clock) data.around_the_clock = params.around_the_clock
    if (params.store) data.store = params.store
    if (params.free_shipping) data.free_shipping = true
    if (params.comments) data.comments = true
    if (params.available) data.available = true
    if (params.around_the_clock) data.around_the_clock = true

    const response = await API.post<ICommonProductFilter>('/store/products/filter/', data)
    return response.data

})

const initialState = {
    entities: {} as IProductFilter,
    product_search: [] as string[],
    loading: true,
    error: false
}

const productSlices = createSlice({
    name: 'product',
    initialState,
    reducers: {
        searchProduct: (state, action: { payload: string }) => {
            console.log(action, "action")
        },
    },
    extraReducers: (builder) => {

        //filter data
        builder
            .addCase(filterProduct.pending, (state, action) => {
                state.loading = true
            })
            .addCase(filterProduct.fulfilled, (state, {payload}) => {
            if(payload.ok){
                state.entities = payload.result
            }
            state.loading = false
            })
            .addCase(filterProduct.rejected,(state)=>{
                state.loading = false
                state.error = true
            })


        // search data
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchProduct.fulfilled, (state, {payload}) => {
            if(payload.ok){
                state.entities = payload.result
            }
            state.loading = false
        })
            .addCase(fetchProduct.rejected, (state)=>{
                state.error = true
            })


        //search key
        builder
            .addCase(fetchSearchKey.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchSearchKey.fulfilled, (state, {payload}) => {
            if(payload.ok){
                state.product_search = payload.result
            }
            state.loading = false
        })

            .addCase(fetchSearchKey.rejected,(state)=>{
                state.error = true
                state.loading = false
            })

    }
})

export const {searchProduct} = productSlices.actions

export default productSlices.reducer