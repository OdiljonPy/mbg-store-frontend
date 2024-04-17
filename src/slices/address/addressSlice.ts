import { IAddress } from "@/data-types/address/address";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
	address_list: IAddress[];
}

const initialState: InitialState = {
	address_list: [] as IAddress[],
};

const addressSlice = createSlice({
	name: "address",
	initialState,
	reducers: {
		addAddress: (state, action: { payload: IAddress }) => {
			state.address_list.forEach(
				(address) => (address.is_default = false)
			);
			state.address_list.push(action.payload);
		},
		toggleDefaultAddress: (
			state,
			action: { payload: IAddress["title"] }
		) => {
			state.address_list.forEach(
				(address) =>
					(address.is_default = address.title === action.payload)
			);
		},
	},
});

export const { addAddress, toggleDefaultAddress } = addressSlice.actions;
export default addressSlice.reducer;
