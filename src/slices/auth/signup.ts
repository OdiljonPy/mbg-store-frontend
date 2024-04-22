import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface SignUpState {
	loading: boolean;
	error: string | null;
}

interface ISignUpRequest {
	phone_number: string;
	password: string;
}

interface ISignUpResponse {
	result: {
		otp_key: string;
	};
	ok: boolean;
	error?: string;
}

const initialState: SignUpState = {
	loading: false,
	error: null,
};

export const signUpUser = createAsyncThunk(
	"auth/signup",
	async (body: ISignUpRequest) => {
		const response = await API.post<ISignUpResponse>(
			"/auth/register/",
			body
		);
		return response.data;
	}
);

const signUpUserSlice = createSlice({
	name: "auth/signup",
	initialState,
	reducers: {
		clearSignUpError(state) {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signUpUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(signUpUser.fulfilled, (state, action) => {
				state.loading = false;
			})
			.addCase(signUpUser.rejected, (state) => {
				state.loading = false;
				state.error = "account_already_exists";
			});
	},
});

export const { clearSignUpError } = signUpUserSlice.actions;
export default signUpUserSlice.reducer;
