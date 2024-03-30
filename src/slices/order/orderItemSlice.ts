import { IOrder } from "@/data-types/order/order";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface OrderResponse {
	response: IOrder;
	ok: boolean;
}

export const fetchOrderById = createAsyncThunk("order", async (id: number) => {
	const response = await API.get<OrderResponse>(`/store/order/${id}/`);
	return response.data;
});

interface InitialState {
	order: IOrder;
	loading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	order: {} as IOrder,
	loading: true,
	error: false,
};

const orderItemSlice = createSlice({
	name: "order",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOrderById.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchOrderById.fulfilled, (state, action) => {
				state.order = action.payload.response;
				state.loading = false;
			})
			.addCase(fetchOrderById.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	},
});

export default orderItemSlice.reducer;
