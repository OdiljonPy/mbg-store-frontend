import { IProductsWithPagination } from "@/data-types/products/common";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IProductLocationRequest {
	latitude?: number;
	longitude?: number;
	location_id?: number;
	page?: number;
	size?: number;
}

interface IProductLocationResponse {
	result: IProductsWithPagination;
	ok: boolean;
	error: string;
}

export const fetchNearestProducts = createAsyncThunk(
	"nearest_products",
	async (data: IProductLocationRequest) => {
		const response = await API.get<IProductLocationResponse>(
			"/store/products/location/",
			{
				params: data,
			}
		);
		return response.data;
	}
);

interface InitialState {
	data: IProductsWithPagination;
	loading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	data: {
		content: [],
		empty: true,
		first: true,
		last: true,
		number: 0,
		numberOfElements: 0,
		size: 0,
		totalElements: 0,
		totalPages: 0,
	} as IProductsWithPagination,
	loading: false,
	error: false,
};

const productLocationSlice = createSlice({
	name: "nearest_products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNearestProducts.pending, (state) => {
				state.error = false;
				state.loading = true;
			})
			.addCase(fetchNearestProducts.fulfilled, (state, { payload }) => {
				if (payload.ok) {
					state.data = payload.result;
				} else {
					state.error = true;
				}
				state.loading = false;
			})
			.addCase(fetchNearestProducts.rejected, (state) => {
				state.error = true;
				state.loading = false;
			});
	},
});

export default productLocationSlice.reducer;
