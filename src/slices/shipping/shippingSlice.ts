import { IShipping } from "@/data-types/shipping";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IGetShippingResponse {
	ok: boolean;
	result: IShipping[];
}

export const fetchShippingList = createAsyncThunk("shipping", async () => {
	const response = await API.get<IGetShippingResponse>(
		"/store/shipping/list/"
	);
	return response.data;
});

interface IPostShippingRequest extends Omit<IShipping, "id"> {}
interface IPostShippingResponse {
	ok: boolean;
	result: IShipping;
}

export const postShipping = createAsyncThunk(
	"shipping/post",
	async (body: IPostShippingRequest) => {
		const response = await API.post<IPostShippingResponse>(
			"/store/shipping/",
			body
		);
		return response.data;
	}
);

interface IPatchShippingRequest extends Omit<IShipping, "id"> {}
interface IPatchShippingResponse {
	ok: boolean;
	result: IShipping;
}

export const patchShipping = createAsyncThunk(
	"shipping/patch",
	async ({
		body,
		shippingId,
	}: {
		body: IPatchShippingRequest;
		shippingId: number;
	}) => {
		const response = await API.patch<IPatchShippingResponse>(
			`/store/shipping/update/${shippingId}/`,
			body
		);
		return response.data;
	}
);

interface IDeleteShippingResponse {
	ok: boolean;
	result: string;
}

export const deleteShipping = createAsyncThunk(
	"shipping/delete",
	async (id: number) => {
		const response = await API.delete<IDeleteShippingResponse>(
			`/store/shipping/delete/${id}/`
		);
		return response.data;
	}
);

interface InitialState {
	shippingList: IShipping[];
	loading: boolean;
	error: boolean;
	postLoading: boolean;
	patchLoading: boolean;
	deleteLoading: boolean;
}

const initialState: InitialState = {
	shippingList: [] as IShipping[],
	loading: true,
	error: false,
	postLoading: false,
	patchLoading: false,
	deleteLoading: false,
};

const shippingListSlice = createSlice({
	name: "shipping",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchShippingList.pending, (state, action) => {
				state.error = false;
				state.loading = true;
			})
			.addCase(fetchShippingList.fulfilled, (state, { payload }) => {
				if (payload.ok) {
					state.shippingList = payload.result;
				} else {
					state.error = true;
				}
				state.loading = false;
			})
			.addCase(fetchShippingList.rejected, (state) => {
				state.error = true;
				state.loading = false;
			});

		builder
			.addCase(postShipping.pending, (state, action) => {
				state.error = false;
				state.postLoading = true;
			})
			.addCase(postShipping.fulfilled, (state, { payload }) => {
				if (payload.ok) {
					state.shippingList.push(payload.result);
				} else {
					state.error = true;
				}
				state.postLoading = false;
			})
			.addCase(postShipping.rejected, (state) => {
				state.error = true;
				state.postLoading = false;
			});

		builder
			.addCase(patchShipping.pending, (state, action) => {
				state.error = false;
				state.patchLoading = true;
			})
			.addCase(patchShipping.fulfilled, (state, { payload }) => {
				if (payload.ok) {
					state.shippingList = state.shippingList.map((shipping) => {
						if (shipping.id === payload.result.id) {
							return payload.result;
						}
						return shipping;
					});
				} else {
					state.error = true;
				}
				state.patchLoading = false;
			})
			.addCase(patchShipping.rejected, (state) => {
				state.error = true;
				state.patchLoading = false;
			});

		builder
			.addCase(deleteShipping.pending, (state) => {
				state.error = false;
				state.deleteLoading = true;
			})
			.addCase(deleteShipping.fulfilled, (state) => {
				state.deleteLoading = false;
			})
			.addCase(deleteShipping.rejected, (state) => {
				state.error = true;
				state.deleteLoading = false;
			});
	},
});

export default shippingListSlice.reducer;
