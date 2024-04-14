import { IFaq } from "@/data-types/base/faq";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IFaqResponse {
	result: IFaq[];
	ok: boolean;
	error?: string;
}

export const fetchFaq = createAsyncThunk("faq", async () => {
	const response = await API.get<IFaqResponse>("/base/faq/");
	return response.data;
});

interface InitialState {
	data: IFaq[];
	loading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	data: [],
	loading: true,
	error: false,
};

export const faqSlice = createSlice({
	name: "faq",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFaq.pending, (state) => {
				state.error = false;
				state.loading = true;
			})
			.addCase(fetchFaq.fulfilled, (state, { payload }) => {
				state.data = payload.result;
				state.loading = false;
			})
			.addCase(fetchFaq.rejected, (state) => {
				state.error = true;
				state.loading = false;
			});
	},
});

export default faqSlice.reducer;
