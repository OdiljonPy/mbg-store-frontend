import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";
import {IResponseStatistics, IStatistics} from "@/data-types/base/statistics";

export const fetchStatistics = createAsyncThunk('statistic',async ()=>{
    const response =  await API.get<IResponseStatistics>('/base/statistics/')
    return response.data
})

interface IInitialState{
    statistic:IStatistics,
    loading:boolean,
    error:boolean
}

const initialState:IInitialState={
    statistic:{} as IStatistics,
    loading : false,
    error:false
}

export const statisticSlices = createSlice({
    name:"statistics",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchStatistics.pending,(state)=>{
            state.loading = true
        })
            .addCase(fetchStatistics.fulfilled,(state, {payload})=>{
                console.log(payload,"payload")
                // if(payload.ok){
                    state.statistic = payload.result
                // }
                state.loading = false
            })
            .addCase(fetchStatistics.rejected,(state)=>{
                state.error = true
                state.loading = false
            })
    }
})

export default statisticSlices.reducer