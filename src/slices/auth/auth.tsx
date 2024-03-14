import { setMessage } from "@/slices/message/message";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IBody {
	phone_number: string;
	password: string;
}

interface IOtpKey {
	otp_key: string;
	otp_code: string;
}

interface IOtpKeyResend {
	otp_key: string;
}

export const getItem = (key: string): string | null => {
	if (typeof window !== "undefined") {
		return localStorage.getItem(key);
	}
	return null;
};

const accessToken = getItem("access_token");

export interface ILoginResponse {
	result: {
		access_token: string;
		refresh_token: string;
	};
	ok: boolean;
	error?: string;
}

export const loginUser = createAsyncThunk(
	"auth/login",
	async (body: IBody, thunkAPI) => {
		try {
			const response = await API.post<ILoginResponse>(
				"/auth/login/",
				body
			);
			localStorage.setItem(
				"access_token",
				response.data.result.access_token
			);
			localStorage.setItem(
				"refresh_token",
				response.data.result.refresh_token
			);

			return response.data;
		} catch (err) {
			thunkAPI.dispatch(setMessage(err));
		}
	}
);

export const signUpUser = createAsyncThunk(
	"auth/signup",
	async (body: IBody, thunkAPI) => {
		try {
			const response = await API.post("/auth/register/", body);
			return response.data;
		} catch (err) {
			thunkAPI.dispatch(setMessage("Ошибка регистрации!"));
		}
	}
);

export const logoutUser = createAsyncThunk("auth/logout", () => {
	localStorage.removeItem("access_token");
	localStorage.removeItem("refresh_token");
});

export const verify = createAsyncThunk(
	"auth/verify",
	async (body: IOtpKey, thunkAPI) => {
		try {
			const response = await API.post("/auth/verify/", body);
			return response.data;
		} catch (err) {
			thunkAPI.dispatch(setMessage("Ошибка при проверке!"));
		}
	}
);

export const verifyResend = createAsyncThunk(
	"auth/verify",
	async (body: IOtpKeyResend, thunkAPI) => {
		try {
			const response = await API.post("/auth/resend/", body);
			return response.data;
		} catch (err) {
			thunkAPI.dispatch(setMessage("Ошибка при проверке!"));
		}
	}
);

interface AuthState {
	isLoggedIn: boolean;
	error: string | null | undefined;
}

const initialState: AuthState = accessToken
	? { isLoggedIn: true, error: null }
	: { isLoggedIn: false, error: null };

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.error = null;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoggedIn = false;
				state.error = action.error.message;
			});

		builder
			.addCase(verify.fulfilled, (state, action) => {
				state.isLoggedIn = false;
			})
			.addCase(verify.rejected, (state, action) => {
				state.isLoggedIn = false;
			});

		builder.addCase(logoutUser.fulfilled, (state) => {
			state.isLoggedIn = false;
		});
	},
});

const { reducer } = authSlice;
export default reducer;
