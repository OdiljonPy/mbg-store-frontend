import { IUser } from "@/data-types/auth/user";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user", async () => {
	const response = await API.get<IUser>("/auth/me/");
	console.log(response.data);
	return response.data;
});

export const updateUserData = createAsyncThunk("user", async () => {});

const initialState = {
	user: {} as IUser,
	loading: true,
	error: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchUser.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.user = payload;
			})
			.addCase(fetchUser.rejected, (state) => {
				state.error = true;
				state.loading = false;
			});
	},
});

export default userSlice.reducer;
