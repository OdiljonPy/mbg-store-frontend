import { IOrder } from "@/data-types/order/order";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOrderById = createAsyncThunk("order", async (id: string) => {
	const response = await API.get<IOrder>(`/order/${id}/`);
	return response.data;
});

interface InitialState {
	result: {
		order: IOrder;
		ok: boolean;
	};
	loading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	result: {
		order: {} as IOrder,
		ok: false,
	},
	loading: false,
	error: false,
};

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOrderById.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchOrderById.fulfilled, (state, action) => {
				state.loading = false;
				state.result.order = action.payload;
			})
			.addCase(fetchOrderById.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	},
});

export default orderSlice.reducer;
