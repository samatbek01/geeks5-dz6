import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://fakestoreapi.com/products";

export const getCats = createAsyncThunk("getCats", async (_, { dispatch }) => {
  try {
    dispatch(isLoadingOn());
    const response = await fetch(BASE_URL);
    if (response.status >= 200 || response.status <= 204) {
      const data = await response.json();
      dispatch(getCatsData(data));
    }
  } catch (e) {
    throw e;
  } finally {
    dispatch(isLoadingOff());
  }
});

export const PostSlice = createSlice({
  name: "postSlice",
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    isLoadingOff: (state) => {
      state.isLoading = false;
    },
    isLoadingOn: (state) => {
      state.isLoading = true;
    },
    getCatsData: (state, action) => {
      state.cats = action.payload;
    },
  },
});

export const { isLoadingOff, isLoadingOn, getCatsData } = PostSlice.actions;
export default PostSlice.reducer;
