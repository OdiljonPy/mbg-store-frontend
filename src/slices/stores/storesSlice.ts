import { IStoreLetter } from "@/components/pages/stores/data-types/store";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IFetchStoresResponse {
	result: Record<
		string,
		[
			{
				id: number;
				brand_name: string;
			}
		]
	>;
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
				const result = action.payload.result;

				let storesCount = 0;
				state.stores = Object.keys(result).map((key) => {
					storesCount += result[key].length;
					return {
						letter: key,
						stores: result[key],
					};
				});

				state.storesCount = storesCount;
			})
			.addCase(fetchAllStores.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	},
});

export default storesSlice.reducer;
