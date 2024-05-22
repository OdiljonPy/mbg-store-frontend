import { IStoreLetter } from "@/components/pages/stores/data-types/store";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IFetchStoresResponse {
	result: IStoreLetter[];
	ok: boolean;
	error?: string;
}

export const fetchAllStores = createAsyncThunk(
	"stores/fetchStores",
	async () => {
		const res = await API<IFetchStoresResponse>("/store/all/");
		return res.data;
	}
);

interface InitialState {
	storesCount: number;
	stores: IStoreLetter[];
	loading: boolean;
	error: boolean;
}

const initialState: InitialState = {
	storesCount: 0,
	stores: [],
	loading: false,
	error: false,
};

const storesSlice = createSlice({
	name: "stores",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllStores.pending, (state) => {
				state.error = false;
				state.loading = true;
			})
			.addCase(fetchAllStores.fulfilled, (state, action) => {
				state.loading = false;

				state.stores = action.payload.result;
				state.storesCount = action.payload.result.length;
			})
			.addCase(fetchAllStores.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	},
});

export default storesSlice.reducer;
