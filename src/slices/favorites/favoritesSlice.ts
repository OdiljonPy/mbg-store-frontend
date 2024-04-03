import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {IProduct} from "@/data-types/products/common";

type InitialState = IProduct[];

const initialState={
	favourites : [] as IProduct[]
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
		},
	},
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
