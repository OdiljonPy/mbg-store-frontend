import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface IQuery {
    q:string,
    size:number | string
}
export const fetchCategory = createAsyncThunk('category', async (query:IQuery) =>{
    const {q,size} = query
    const response = await fetch(`https://mbgstore-backend-t5jmi.ondigitalocean.app/api/v1/category/?size=${size}&q=${q}`)
    const data = response.json()
    return data
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