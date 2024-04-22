import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IUpdatePasswordRequest {
	token: string;
	new_password: string;
}

interface IUpdatePasswordResponse {
	result: {
		message: string;
	};
	ok: boolean;
	error?: string;
}

export const updatePassword = createAsyncThunk(
	"update_password",
	async (payload: IUpdatePasswordRequest) => {
		const response = await API.post<IUpdatePasswordResponse>(
			`/auth/update/password/${payload.token}`,
			{ new_password: payload.new_password }
		);
		return response.data;
	}
);

interface InitialState {
	loading: boolean;
	error: string | null;
}

const initialState: InitialState = {
	loading: false,
	error: null,
};

const updatePasswordSlice = createSlice({
	name: "update_password",
	initialState,
	reducers: {
		clearUpdatePasswordError(state) {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(updatePassword.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updatePassword.fulfilled, (state) => {
				state.loading = false;
			})
			.addCase(updatePassword.rejected, (state) => {
				state.loading = false;
				state.error = "something_went_wrong";
			});
	},
});

export const { clearUpdatePasswordError } = updatePasswordSlice.actions;
export default updatePasswordSlice.reducer;
