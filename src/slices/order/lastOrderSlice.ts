import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";
import {IOrder} from "@/data-types/order/order";

interface ILastOrderRes{
    response :IOrder
    ok:boolean
}

export const fetchOrderLast = createAsyncThunk("order_last",async ()=>{
   const response = await API.get<ILastOrderRes>('/store/orders/last/')
    return response.data
})

interface IState{
    last_order : IOrder,
    loading:boolean,
    error:boolean
}

const initialState:IState = {
    last_order : {} as IOrder,
    loading : false,
    error:false
}

const lastOrderSlices = createSlice({
    name:'last_order',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchOrderLast.pending,(state)=>{
            state.loading = true
        })
            .addCase(fetchOrderLast.fulfilled,(state, {payload})=>{
                console.log(payload,"payload")
                state.last_order = payload.response
                state.loading = false
            })
            .addCase(fetchOrderLast.rejected,(state)=>{
                state.error = true
                state.loading = false
            })
    }
})


export default lastOrderSlices.reducer