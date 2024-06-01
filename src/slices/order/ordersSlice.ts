import {
	IOrder,
	IOrderWithPagination,
	IPostOrder,
} from "@/data-types/order/order";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface OrdersResponse {
	response: IOrderWithPagination;
	ok: boolean;
}

export const fetchOrders = createAsyncThunk(
	"order",
	async ({ page, size, q }: { page?: number; size?: number; q?: string }) => {
		if (!q) q = undefined;
		const response = await API.get<OrdersResponse>("/store/orders/", {
			params: { page, size, q },
		});
		return response.data;
	}
);

// create order

interface CreateOrderResponse {
	result: IOrder;
	ok: boolean;
}

export const createOrder = createAsyncThunk(
	"order_create",
	async (order: IPostOrder) => {
		const res = await API.post<CreateOrderResponse>("/store/order/", order);
		return res.data;
	}
);

interface InitialState {
	orders: IOrderWithPagination;
	loading: boolean;
	createLoad: boolean;
	error: boolean;
}

const initialState: InitialState = {
	orders: {
		content: [] as IOrder[],
	} as IOrderWithPagination,
	loading: true,
	createLoad: false,
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

		// 	for order create
		builder
			.addCase(createOrder.pending, (state) => {
				state.createLoad = true;
			})
			.addCase(createOrder.fulfilled, (state, { payload }) => {
				state.createLoad = false;
				state.error = false;
			})
			.addCase(createOrder.rejected, (state) => {
				state.createLoad = false;
				state.error = true;
			});
	},
});

export default ordersSlice.reducer;
