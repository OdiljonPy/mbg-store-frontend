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

export const verify = createAsyncThunk(
	"auth/verify",
	async (body: IOtpKeyRequest) => {
		const response = await API.post<IOtpKeyResponse>("/auth/verify/", body);
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
	verified: boolean;
	loading: boolean;
	error: string | null;
}

const initialState: VerifyState = {
	verified: false,
	loading: false,
	error: null,
};

const verifyUserSlice = createSlice({
	name: "auth/verify",
	initialState,
	reducers: {
		clearVerifyError(state) {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(verify.pending, (state) => {
				state.loading = true;
			})
			.addCase(verify.fulfilled, (state) => {
				state.loading = false;
				state.verified = true;
			})
			.addCase(verify.rejected, (state) => {
				state.loading = false;
				state.error = "Неверный код";
			});
	},
});

export const { clearVerifyError } = verifyUserSlice.actions;

export default verifyUserSlice.reducer;
