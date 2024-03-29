// import { createSlice } from "@reduxjs/toolkit";

// interface InitialState {
// 	title: string | null;
// }

// const item =
// 	typeof window !== "undefined" ? localStorage.getItem("address") : null;

// const initialState: InitialState = {
// 	title: item,
// };

// const addressSlice = createSlice({
// 	name: "address",
// 	initialState,
// 	reducers: {
// 		getAddress: (state) => {
// 			state.title = localStorage.getItem("address");
// 		},
// 		setAddress: (state, action) => {
// 			state = action.payload;
// 			localStorage.setItem("address", action.payload);
// 		},

// 		removeAddress: (state) => {
// 			state.title = null;
// 			localStorage.removeItem("address");
// 		},
// 	},
// });

// export const { getAddress, setAddress, removeAddress } = addressSlice.actions;
// export default addressSlice.reducer;
