import { createSlice } from "@reduxjs/toolkit";

const getItem = (): string | null => {
	if (typeof window !== "undefined") {
		return localStorage.getItem("address");
	}
	return null;
};

const address = getItem();

const initialState: string | null = address;

const addressSlice = createSlice({
	name: "address",
	initialState,
	reducers: {
		setAddress: (state, action) => {
			state = action.payload;
		},

		removeAddress: (state) => {
			state = null;
		},
	},
});

export const { setAddress, removeAddress } = addressSlice.actions;
export default addressSlice.reducer;
