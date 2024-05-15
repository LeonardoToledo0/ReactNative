import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "@/hooks/loginSlice";

export const store = configureStore({
  reducer: {
    Login: LoginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
