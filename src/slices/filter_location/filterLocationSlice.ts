import { IFilterLocation } from "@/data-types/address/filter-location";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
	address_list: IFilterLocation[];
}

const initialState: InitialState = {
	address_list: [] as IFilterLocation[],
};

const filterLocationSlice = createSlice({
	name: "filterLocation",
	initialState,
	reducers: {
		addFilterLocation: (state, action: { payload: IFilterLocation }) => {
			if (
				state.address_list.find(
					(state) => state.address === action.payload.address
				)
			)
				return;
			state.address_list.push(action.payload);
		},
		removeFilterLocation: (
			state,
			action: { payload: IFilterLocation["address"] }
		) => {
			state.address_list = state.address_list.filter(
				(item) => item.address !== action.payload
			);
		},
	},
});

export const { addFilterLocation, removeFilterLocation } =
	filterLocationSlice.actions;
export default filterLocationSlice.reducer;
