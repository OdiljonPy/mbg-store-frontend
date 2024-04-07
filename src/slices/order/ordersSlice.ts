import {IOrder, IPostOrder} from "@/data-types/order/order";
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

// create order

export const createOrder = createAsyncThunk("order_create",async (order:IPostOrder)=>{
	const res = await API.post('/store/order/',order)
	return res.data
})

interface InitialState {
	orders: IOrder[];
	loading: boolean;
	createLoad:boolean
	error: boolean;
}

const initialState: InitialState = {
	orders: {} as IOrder[],
	loading: true,
	createLoad:false,
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
		builder.addCase(createOrder.pending,(state)=>{
			state.createLoad = true
		})
			.addCase(createOrder.fulfilled,(state, {payload})=>{
				state.createLoad = false
		})
			.addCase(createOrder.rejected,(state)=>{
			state.createLoad = false
			state.error = true
		})
	},
});

export default ordersSlice.reducer;
