import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface OftenSearchedProductsResponse {
	result: string[];
	ok: boolean;
	error: string | null;
}

export const fetchOftenSearchedProducts = createAsyncThunk(
	"often_searched_products",
	async () => {
		const response = await API.get<OftenSearchedProductsResponse>(
			"/store/products/often_searched/"
		);
		return response.data;
	}
);

interface InitialState {
	data: string[];
	loading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	data: [],
	loading: true,
	error: false,
};

const oftenSearchedProductsSlice = createSlice({
	name: "often_searched_products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOftenSearchedProducts.pending, (state) => {
				state.error = false;
				state.loading = true;
			})
			.addCase(
				fetchOftenSearchedProducts.fulfilled,
				(state, { payload }) => {
					if (payload.ok) {
						state.data = payload.result;
					} else {
						state.error = true;
					}
					state.loading = false;
				}
			)
			.addCase(fetchOftenSearchedProducts.rejected, (state) => {
				state.error = true;
				state.loading = false;
			});
	},
});

export default oftenSearchedProductsSlice.reducer;
