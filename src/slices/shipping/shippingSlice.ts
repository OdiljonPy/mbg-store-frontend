import { IShipping } from "@/data-types/shipping";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IShippingRequest {
	address_name: string;
	address: string;
	entrance: number;
	floor: number;
	apartment: number;
	latitude: string;
	longitude: string;
	main_address: boolean;
}

interface IShippingResponse {
	ok: boolean;
	result: IShipping[];
}

export const postShipping = createAsyncThunk(
	"shipping/post",
	async (body: IShippingRequest) => {
		const response = await API.post<IShippingResponse>(
			"/store/shipping/",
			body
		);
		return response.data;
	}
);

export const fetchShippingList = createAsyncThunk("shipping", async () => {
	const response = await API.get<IShippingResponse>("/store/shipping/list/");
	return response.data;
});

export const deleteShipping = createAsyncThunk(
	"shipping/delete",
	async (id: number) => {
		const response = await API.delete<IShippingResponse>(
			`/store/shipping/${id}/delete`
		);
		return response.data;
	}
);

interface InitialState {
	shippingList: IShipping[];
	loading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	shippingList: [] as IShipping[],
	loading: true,
	error: false,
};

const shippingListSlice = createSlice({
	name: "shipping",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchShippingList.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchShippingList.fulfilled, (state, { payload }) => {
			if (payload.ok) {
				state.shippingList = payload.result;
			} else {
				state.error = true;
			}
			state.loading = false;
		});
		builder.addCase(fetchShippingList.rejected, (state) => {
			state.error = true;
			state.loading = false;
		});
	},
});

export default shippingListSlice.reducer;
