import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";

export const changeOrderStatus = createAsyncThunk("change_status",async (payload: { id:number,status:number })=>{
    const response = await API.patch('/store/order/change_status/',payload)
    return response.data
})

const initialState={
    loading:false,
    error:false
}

const orderChangeStatus = createSlice({
    name:'order_change',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(changeOrderStatus.pending,(state)=>{
            state.loading = true
        })
            .addCase(changeOrderStatus.fulfilled,(state,action)=>{
                state.loading  = false
                state.error = false
            })
            .addCase(changeOrderStatus.rejected,(state)=>{
                state.loading = false
                state.error = true
            })
    }
})

export default orderChangeStatus.reducer