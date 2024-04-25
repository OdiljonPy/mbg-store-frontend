import {PayloadAction, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {IProduct} from "@/data-types/products/common";
import API from "@/utils/axios/axios";
import {IProductFavourite} from "@/data-types/products/product-favourite/product-favourite";

export const fetchFavourites = createAsyncThunk('fetch_favourites',async ()=>{
	const response = await API.get<IProductFavourite>('/store/products/feature-list/')
	return response.data
})

export const postFavourites = createAsyncThunk('post_favourites',async (ids:number[])=>{
	const request = await API.post('/store/products/feature/',{product_ids : ids})
	return request.data
})

const initialState={
	favourites : [] as IProduct[],
	newFavourites : [] as IProduct[],
	total_count : 0,
	posErr : false
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		toggleFavorite: (state, { payload }: PayloadAction<IProduct>) => {
			const isExist = state.favourites.some((item) => item.id === payload.id);

			if (isExist) {
				const index = state.favourites.findIndex((item) => item.id === payload.id);
				if (index > -1) {
					state.favourites.splice(index, 1);
				}
			} else {
				state.favourites.push(payload);
			}
			state.total_count = state.favourites?.length
		},
	},
	extraReducers:builder => {
		builder.addCase(fetchFavourites.fulfilled,(state, {payload})=>{
			if(payload.ok && payload.result?.length){
				const copyProducts = state.favourites
				 payload.result?.forEach((product)=>{
					const idx = state.favourites.findIndex(old=> old.id === product.id)
					if(idx === -1){
						state.favourites = [...state.favourites,product]
					}
					else {
						state.newFavourites = copyProducts?.filter((product)=> product.id !== state.favourites[idx].id)
					}
				})
				state.total_count = state.favourites?.length
			}
		})
			// post request
		builder.addCase(postFavourites.pending,(state)=>{
			state.posErr = false
		})
			.addCase(postFavourites.fulfilled,(state, action)=>{
		})
			.addCase(postFavourites.rejected,(state)=>{
				state.posErr = false
			})
	}
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
