import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IResetPasswordRequest {
	phone_number: string;
}

interface IResetPasswordResponse {
	result: {
		otp_key: string;
	};
	ok: boolean;
	error?: string;
	new_otp_time?: string;
}

export const resetPassword = createAsyncThunk(
	"reset_password",
	async (data: IResetPasswordRequest, { rejectWithValue }) => {
		try {
			const response = await API.post<IResetPasswordResponse>(
				"/auth/reset/password/",
				data
			);
			return response.data;
		} catch (err: any) {
			if (!err.response) {
				throw err;
			}
			return rejectWithValue(err.response.data);
		}
	}
);

interface InitialState {
	loading: boolean;
	error: string | null;
	new_otp_time?: string;
}

const initialState: InitialState = {
	loading: false,
	error: null,
};

const resetPasswordSlice = createSlice({
	name: "reset_password",
	initialState,
	reducers: {
		clearResetError: (state) => {
			state.error = null;
		},
		setNewOtpTime: (state, action) => {
			state.new_otp_time = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(resetPassword.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(resetPassword.fulfilled, (state) => {
				state.loading = false;
			})
			.addCase(resetPassword.rejected, (state) => {
				state.loading = false;
				state.error = "invalid_phone_number";
			});
	},
});

export const { clearResetError, setNewOtpTime } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
