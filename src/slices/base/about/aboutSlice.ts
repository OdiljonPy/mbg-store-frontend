import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IFetchAboutResponse {
  result: {
    id: number;
    phone: string;
    email: string;
    address: string;
    telegram: string;
    facebook: string;
    instagram: string;
    app_qr_image: string;
    address_url: string;
  };
  ok: boolean;
}

export const fetchAbout = createAsyncThunk("about", async () => {
  const response = await API.get<IFetchAboutResponse>("/base/about/");
  return response.data;
});

interface IInitialState {
  data: {
    phone: string;
    email: string;
    address: string;
    telegram: string;
    facebook: string;
    instagram: string;
    app_qr_image: string;
    address_url: string;
  };
  loading: boolean;
  error: boolean;
}

const initialState: IInitialState = {
  data: {
    phone: "",
    email: "",
    address: "",
    telegram: "",
    facebook: "",
    instagram: "",
    app_qr_image: "",
    address_url: "",
  },
  loading: true,
  error: false,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAbout.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchAbout.fulfilled, (state, { payload }) => {
        state.data = payload.result;
        state.loading = false;
      })
      .addCase(fetchAbout.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default aboutSlice.reducer;
