import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";

export const fetchStories = createAsyncThunk('stories',(async () =>{
    const response = await API.get("/store/")
    return response.data
}))

const initialState = {
    stories : [],
    loading : false,
    error : false
} as any

const storeSlices = createSlice({
    name:'stories',
    initialState,
    reducers:{},
    extraReducers:((builder)  =>{
        builder.addCase(fetchStories.fulfilled, (state,action) =>{
            state.stories = true
            if(action.payload.ok){
                state.stories = action.payload
            }
            else state.error = false
        })
            .addCase(fetchStories.pending, (state,action) =>{
                state.loading = false
            })
    })
})

export default storeSlices.reducer