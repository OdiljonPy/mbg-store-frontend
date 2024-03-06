import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";

interface IQuery {
    q:string,
    size:number | string
}
export const fetchCategory = createAsyncThunk('category', async (query:IQuery) =>{
    const {q,size} = query
    const response = await API.get(`/category/?size=${size}&q=${q}`)
    return response.data
})


const initialState = {
    category : [],
    loading : false,
    error:false
} as any


 const categorySlices = createSlice({
    name : 'category',
    initialState,
    reducers:{},
    extraReducers : (builder =>{

        builder.addCase(fetchCategory.fulfilled,(state,action) =>{
            state.loading = true
            if(action.payload.ok){
                state.category = [action.payload]
            }
            else{
                state.error = true
            }
        })
            .addCase(fetchCategory.pending, (state,action) =>{
                state.loading = false
            })
    })
})

export default categorySlices.reducer