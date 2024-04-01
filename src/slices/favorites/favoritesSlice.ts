import { IProductInner } from "@/data-types/products/product-inner/product-inner";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = IProductInner[];

const initialState: InitialState = [];

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		toggleFavorite: (state, { payload }: PayloadAction<IProductInner>) => {
			const isExist = state.some((item) => item.id === payload.id);

			if (isExist) {
				const index = state.findIndex((item) => item.id === payload.id);
				if (index > -1) {
					state.splice(index, 1);
				}
			} else {
				state.push(payload);
			}
		},
	},
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
