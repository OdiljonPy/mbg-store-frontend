import { EnumGender, IUser } from "@/data-types/auth/user";
import API from "@/utils/axios/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type FetchUserResponse = {
	result: IUser;
	ok: boolean;
};

export const fetchUser = createAsyncThunk("user", async () => {
	const response = await API.get<FetchUserResponse>("/auth/me/");
	return response.data;
});

export interface IUpdateUserRequest {
	full_name?: string;
	gender?: EnumGender;
	birth_date?: string;
}

export const updateUserData = createAsyncThunk(
	"user/update",
	async (data: IUpdateUserRequest) => {
		const response = await API.patch<FetchUserResponse>(
			"/auth/update/",
			data
		);
		return response.data;
	}
);

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
				if (payload.ok) {
					state.user = payload.result;
				} else {
					state.error = true;
				}
				state.loading = false;
			})
			.addCase(fetchUser.rejected, (state) => {
				state.error = true;
				state.loading = false;
			});

		builder
			.addCase(updateUserData.pending, (state) => {
				state.loading = true;
			})
			.addCase(updateUserData.fulfilled, (state, { payload }) => {
				if (payload.ok) {
					state.user = payload.result;
				} else {
					state.error = true;
				}
				state.loading = false;
			})
			.addCase(updateUserData.rejected, (state) => {
				state.error = true;
			});
	},
});

export default userSlice.reducer;
