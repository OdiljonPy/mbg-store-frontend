import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";
import {IPartner, IPartnerRes} from "@/data-types/base/partner";

export const fetchPartner = createAsyncThunk("partner",async ()=>{
    const response = await API.get<IPartnerRes>('/base/partner/')
    return response.data
})

interface IPartnerState{
    partner : IPartner[]
    loading : boolean
    error : boolean
}

const initialState:IPartnerState = {
    partner : [],
    loading : false,
    error : false
}

export const partnerSlice = createSlice({
    name : 'partner',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder.addCase(fetchPartner.pending,(state)=>{
            state.error = false
            state.loading = true
        })
            .addCase(fetchPartner.fulfilled,(state, {payload})=>{
                if(payload.ok){
                    state.partner = payload.result
                }
                state.loading = false
            })
            .addCase(fetchPartner.rejected,(state)=>{
                state.error = true
                state.loading = false
            })
    }
})

export default partnerSlice.reducer