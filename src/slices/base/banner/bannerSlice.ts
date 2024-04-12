import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IBannersResponse {
	result: {
		name: string;
		link: string;
		image: string;
	}[];
	ok: boolean;
	error?: string;
}

export const fetchBanners = createAsyncThunk("banners", async () => {
	const response = await API.get<IBannersResponse>("/base/banner/");
	return response.data;
});

interface InitialState {
	banners: {
		name: string;
		link: string;
		image: string;
	}[];
	loading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	banners: [],
	loading: true,
	error: false,
};

const bannerSlice = createSlice({
	name: "banner",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBanners.pending, (state) => {
				state.error = false;
				state.loading = true;
			})
			.addCase(fetchBanners.fulfilled, (state, { payload }) => {
				state.banners = payload.result;
				state.loading = false;
			})
			.addCase(fetchBanners.rejected, (state) => {
				state.error = true;
				state.loading = false;
			});
	},
});

export default bannerSlice.reducer;