import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";
import {ICategory, ICommonCategory} from "@/data-types/categories/categories";

interface IQuery {
    q:string,
    size:number | string
}
export const fetchCategory = createAsyncThunk('category', async (query:IQuery) =>{
    const {q,size} = query
    const response = await API.get<ICommonCategory>(`/category/?size=${size}&q=${q}`)
    return response.data
})


const initialState = {
    categories : [] as ICategory[],
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
            })
    })
})

export default categorySlices.reducer