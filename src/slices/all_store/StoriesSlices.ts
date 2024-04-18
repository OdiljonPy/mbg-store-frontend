import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";
import {ICommonStores, IStores} from "@/data-types/stores/stores";

export const fetchStories = createAsyncThunk('stories',(async () =>{
    const response = await API.get<ICommonStores>("/store/")
    return response.data
}))

const initialState = {
    stories : [] as IStores[],
    loading : false,
    error : false
}

const storeSlices = createSlice({
    name:'stories',
    initialState,
    reducers:{},
    extraReducers:((builder)  =>{
        builder
            .addCase(fetchStories.pending, (state,action) =>{
                state.loading = true
            })
            .addCase(fetchStories.fulfilled, (state, {payload}) =>{
            if(payload.ok){
                state.stories = payload.result
            }else throw new Error('error')
                state.loading = false
        })
            .addCase(fetchStories.rejected,(state)=>{
                state.error = true
                state.loading = true
            })

    })
})

export default storeSlices.reducer