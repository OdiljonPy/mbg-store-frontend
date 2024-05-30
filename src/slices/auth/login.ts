import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ILoginRequest {
  phone_number: string;
  password: string;
}

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
  async (body: ILoginRequest) => {
    const response = await API.post<ILoginResponse>("/auth/login/", body);
    localStorage.setItem("access_token", response.data.result.access_token);
    localStorage.setItem("refresh_token", response.data.result.refresh_token);

    return response.data;
  },
);

export const logoutUser = createAsyncThunk("auth/logout", () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("persist:user");
});

interface LoginState {
  isLoggedIn: boolean;
  error: string | null;
  loading: boolean;
  onOpenLogin: boolean;
}

export const getItem = (key: string): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};

const accessToken = getItem("access_token");

const initialState: LoginState = accessToken
  ? {
      isLoggedIn: true,
      error: null,
      loading: false,
      onOpenLogin: false,
    }
  : {
      isLoggedIn: false,
      error: null,
      loading: false,
      onOpenLogin: false,
    };

const loginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    clearLoginError(state) {
      state.error = null;
    },
    openLoginModal(state) {
      state.onOpenLogin = true;
    },
    closeLoginModal(state) {
      state.onOpenLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = "invalid_phone_or_password";
      });

    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoggedIn = false;
    });
  },
});

export const { clearLoginError, openLoginModal, closeLoginModal } =
  loginSlice.actions;

export default loginSlice.reducer;
