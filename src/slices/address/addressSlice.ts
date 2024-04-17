import { IAddress } from "@/data-types/address/address";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
	main_address: IAddress;
	address_list: IAddress[];
}

const initialState: InitialState = {
	main_address: {} as IAddress,
	address_list: [] as IAddress[],
};

const addressSlice = createSlice({
	name: "address",
	initialState,
	reducers: {
		addAddress: (state, action: { payload: IAddress }) => {
			state.address_list.push(action.payload);
			state.main_address = action.payload;
		},
		changeDefaultAddress: (state, action: { payload: IAddress }) => {
			state.main_address = action.payload;
		},
	},
});

export const { addAddress, changeDefaultAddress } = addressSlice.actions;
export default addressSlice.reducer;
