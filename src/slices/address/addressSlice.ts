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
		addAddress: (state, action: { payload: Omit<IAddress, "id"> }) => {
			if (
				state.address_list.find(
					(item) => item.address === action.payload.address
				)
			)
				return;
			const newId = Math.random();
			state.address_list.push({ ...action.payload, id: newId });
			state.main_address = { ...action.payload, id: newId };
		},
		changeDefaultAddress: (state, action: { payload: IAddress }) => {
			state.main_address = action.payload;
		},
		removeAddress: (state, action: { payload: IAddress["id"] }) => {
			state.address_list = state.address_list.filter(
				(address) => address.id !== action.payload
			);
			if (
				state.address_list.length === 0 ||
				action.payload === state.main_address.id
			) {
				state.main_address = {} as IAddress;
			}
		},
	},
});

export const { addAddress, changeDefaultAddress, removeAddress } =
	addressSlice.actions;
export default addressSlice.reducer;
