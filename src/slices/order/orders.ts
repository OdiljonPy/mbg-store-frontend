import { IOrder } from "@/data-types/order/order";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOrders = createAsyncThunk("order", async () => {
	const response = await API.get<IOrder[]>("/orders/");
	return response.data;
});

interface InitialState {
	result: {
		orders: IOrder[];
		ok: boolean;
	};
	loading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	result: {
		orders: {} as IOrder[],
		ok: false,
	},
	loading: false,
	error: false,
};

const orderSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOrders.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchOrders.fulfilled, (state, action) => {
				state.loading = false;
				state.result.orders = action.payload;
			})
			.addCase(fetchOrders.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	},
});

export default orderSlice.reducer;
