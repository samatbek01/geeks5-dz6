import { configureStore } from "@reduxjs/toolkit";
import { PostSlice } from "./PostSlice";

export const store = configureStore({
  reducer: {
    PostSlice: PostSlice.reducer,
  },
});
