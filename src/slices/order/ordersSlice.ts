import { IOrder } from "@/data-types/order/order";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface OrdersResponse {
	response: IOrder[];
	ok: boolean;
}

export const fetchOrders = createAsyncThunk("order", async () => {
	const response = await API.get<OrdersResponse>("/store/orders/");
	return response.data;
});

interface InitialState {
	orders: IOrder[];
	loading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	orders: {} as IOrder[],
	loading: true,
	error: false,
};

const ordersSlice = createSlice({
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
				if (action.payload.ok) {
					state.orders = action.payload.response;
				}
			})
			.addCase(fetchOrders.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	},
});

export default ordersSlice.reducer;
