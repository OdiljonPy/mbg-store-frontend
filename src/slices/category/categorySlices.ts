import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";
import {ICategory, ICommonCategory} from "@/data-types/categories/categories";


export const fetchCategory = createAsyncThunk('category', async (size:number) =>{
    const response = await API.get<ICommonCategory>(`/category/?size=${size}`)
    return response.data
})

export const fetchCategoryPopular = createAsyncThunk('category_popular', async () =>{
    const response = await API.get<ICommonCategory>(`/category/?size=6&q=popular`)
    return response.data
})


const initialState = {
    categories : [] as ICategory[],
    popular_categories : [] as ICategory[],
    loading : false,
    error:false
}


 const categorySlices = createSlice({
    name : 'category',
    initialState,
    reducers:{},
    extraReducers : (builder =>{
        builder
            .addCase(fetchCategory.pending, (state,action) =>{
                state.loading = true
                state.error = false
            })
            .addCase(fetchCategory.fulfilled,(state, {payload}) =>{
            if(payload.ok){
                state.categories = payload.result
            }
            else{
                state.error = true
            }
            state.loading = false
        })
            .addCase(fetchCategory.rejected, (state)=>{
                state.error = true
                state.loading = false
            })

    //     popular category
        builder
            .addCase(fetchCategoryPopular.pending, (state,action) =>{
                state.error = false
                state.loading = true
            })
            .addCase(fetchCategoryPopular.fulfilled,(state, {payload}) =>{
                if(payload.ok){
                    state.popular_categories = payload.result
                }
                else{
                    state.error = true
                }
                state.loading = false
            })
            .addCase(fetchCategoryPopular.rejected, (state)=>{
                state.error = true
                state.loading = false
            })

    })
})

export default categorySlices.reducer