import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";
import {ICommonProduct, IProductInner} from "@/data-types/products/product-inner/product-inner";
import {ICommonComment, IProductComments} from "@/data-types/products/product-comments/product-comments";


export const fetchProductSingle = createAsyncThunk('product_single', async (id: string[] | string | undefined) => {
    const response = await API.get<ICommonProduct>(`/store/products/${id}/`)
    return response.data
});

export const fetchProductComments = createAsyncThunk('product_comment',async (id:string[] | string | undefined)=>{
    const response = await API.get<ICommonComment>(`/store/comments/${id}/`)
    return response.data
})

const initialState = {
    info : {} as IProductInner,
    comments:{} as IProductComments,
    loading:false,
    error:false
}

const productSingleInfo = createSlice({
    name : 'product_single',
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>{
        builder
            .addCase(fetchProductSingle.pending, (state) =>{
                state.loading = true
                state.error = false
            })
            .addCase(fetchProductSingle.fulfilled, (state, {payload}) =>{
             if(!payload.ok){
                 throw new Error("Page not found")
             }
            state.info = payload.result
            state.loading = false
        }).addCase(fetchProductSingle.rejected, (state)=>{
            state.error = true
            state.loading = false
        })

    //     for product comments
        builder.addCase(fetchProductComments.pending,(state=>{
            state.loading = true
            state.error = false
        }))
            .addCase(fetchProductComments.fulfilled,(state, {payload})=>{
                if(!payload.ok){
                    throw new Error("Page not found")
                }
                state.comments = payload.result
                state.loading = false
            })
            .addCase(fetchProductComments.rejected,(state)=>{
                state.loading = false
                state.error = true
            })

    }
})

export default productSingleInfo.reducer