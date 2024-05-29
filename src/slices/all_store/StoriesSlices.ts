import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/utils/axios/axios";
import {
  ICommonStores,
  ICommonStoreSingle,
  IStores,
} from "@/data-types/stores/stores";

export const fetchStories = createAsyncThunk("stories", async () => {
  const response = await API.get<ICommonStores>("/store/");
  return response.data;
});

export const fetchStoreSingle = createAsyncThunk(
  "store_single",
  async (id: string | string[] | undefined) => {
    const res = await API.get<ICommonStoreSingle>(`/store/${id}`);
    return res.data;
  },
);

const initialState = {
  stories: [] as IStores[],
  single_store: {} as IStores,
  loading: false,
  error: false,
};

const storeSlices = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchStories.fulfilled, (state, { payload }) => {
        if (payload.ok) {
          state.stories = payload.result;
        } else throw new Error("error");
        state.loading = false;
      })
      .addCase(fetchStories.rejected, (state) => {
        state.error = true;
        state.loading = true;
      });

    //     for store single
    builder
      .addCase(fetchStoreSingle.pending, (state) => {
        state.loading = true;
        state.error = false;
        // @ts-ignore
        state.single_store = {};
      })
      .addCase(fetchStoreSingle.fulfilled, (state, { payload }) => {
        if (payload.ok) {
          state.single_store = payload.result;
        }
        state.loading = false;
      })
      .addCase(fetchStoreSingle.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default storeSlices.reducer;
