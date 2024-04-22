import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IOtpKeyRequest {
	otp_key: string;
	otp_code: string;
}

export interface IOtpKeyResponse {
	result: string;
	ok: boolean;
	error?: string;
}

export const resetVerify = createAsyncThunk(
	"auth/reset_verify",
	async (body: IOtpKeyRequest) => {
		const response = await API.post<IOtpKeyResponse>(
			"/auth/check/reset_token/",
			body
		);
		return response.data;
	}
);

export interface IOtpKeyRequestResend {
	otp_key: string;
}

export interface IOtpKeyResponseResend {
	result: {
		otp_key: string;
	};
	ok: boolean;
	error?: string;
}

export const resendOtpKey = createAsyncThunk(
	"auth/resend",
	async (body: IOtpKeyRequestResend) => {
		const response = await API.post<IOtpKeyResponseResend>(
			"/auth/resend/",
			body
		);
		return response.data;
	}
);

interface VerifyState {
	token: string;
	loading: boolean;
	error: string | null;
}

const initialState: VerifyState = {
	token: "",
	loading: false,
	error: null,
};

const resetVerifySlice = createSlice({
	name: "auth/verify",
	initialState,
	reducers: {
		clearResetVerifyError(state) {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(resetVerify.pending, (state) => {
				state.loading = true;
			})
			.addCase(resetVerify.fulfilled, (state, { payload }) => {
				state.token = payload.result;
				state.loading = false;
			})
			.addCase(resetVerify.rejected, (state) => {
				state.loading = false;
				state.error = "invalid_code";
			});
	},
});

export const { clearResetVerifyError } = resetVerifySlice.actions;

export default resetVerifySlice.reducer;
