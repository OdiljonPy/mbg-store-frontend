import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";

const initialState = {
    code:'',
    loading:false,
    error:false
}

export const fetchPromoCode = createAsyncThunk("promo_code",async (code:string)=>{
    const response = await API.post('/store/check_promo_code/',{promo_code:code})
    return response.data
})

const promoCodeSlices = createSlice({
    name:"promo_code",
    initialState,
    reducers:{},
    extraReducers:(builder )=> {
        builder.addCase(fetchPromoCode.pending,(state)=>{
            state.error = false
            state.loading = true
        })
            .addCase(fetchPromoCode.fulfilled,(state, {payload}) => {
                state.loading = false
                if(payload.ok){
                    state.code = payload.result
                }

                state.error = false
            })

            .addCase(fetchPromoCode.rejected,(state) => {
                state.loading = false
                state.error = true
            })
    }
})

export default promoCodeSlices.reducer