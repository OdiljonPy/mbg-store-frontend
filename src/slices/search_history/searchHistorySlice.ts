import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
	data: string[];
}

const initialState: InitialState = {
	data: [],
};

const searchHistorySlice = createSlice({
	name: "search_history",
	initialState,
	reducers: {
		addSearchHistory: (state, action) => {
			if (!state.data.includes(action.payload)) {
				state.data = [...state.data, action.payload];
			}
		},
		removeSearchHistory: (state, action) => {
			state.data = state.data.filter((item) => item !== action.payload);
		},
		clearSearchHistory: (state) => {
			state.data = [];
		},
	},
});

export const { addSearchHistory, removeSearchHistory, clearSearchHistory } =
	searchHistorySlice.actions;
export default searchHistorySlice.reducer;
