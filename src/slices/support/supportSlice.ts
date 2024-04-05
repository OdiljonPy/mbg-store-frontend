import { ISupport } from "@/data-types/support";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IGetSupportsResponse {
	ok: boolean;
	result: ISupport[];
}

export const fetchSupports = createAsyncThunk("supports", async () => {
	const response = await API.get<IGetSupportsResponse>("/support/");
	return response.data;
});

interface IPostSupportsResponse {
	ok: boolean;
	result: ISupport;
}

export const postSupport = createAsyncThunk(
	"supports/post",
	async (body: FormData) => {
		const response = await API.post<IPostSupportsResponse>(
			"/support/",
			body
		);
		return response.data;
	}
);

interface InitialState {
	supports: ISupport[];
	loading: boolean;
	postLoading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	supports: [],
	loading: true,
	postLoading: false,
	error: false,
};

export const supportSlice = createSlice({
	name: "supports",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSupports.pending, (state, action) => {
				state.error = false;
				state.loading = true;
			})
			.addCase(fetchSupports.fulfilled, (state, { payload }) => {
				if (payload.ok) {
					state.supports = payload.result;
				} else {
					state.error = true;
				}
				state.loading = false;
			})
			.addCase(fetchSupports.rejected, (state) => {
				state.error = true;
				state.loading = false;
			});

		builder
			.addCase(postSupport.pending, (state, action) => {
				state.error = false;
				state.postLoading = true;
			})
			.addCase(postSupport.fulfilled, (state, { payload }) => {
				if (payload.ok) {
					state.supports.push(payload.result);
				} else {
					state.error = true;
				}
				state.postLoading = false;
			})
			.addCase(postSupport.rejected, (state) => {
				state.error = true;
				state.postLoading = false;
			});
	},
});

export default supportSlice.reducer;
