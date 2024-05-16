import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "@/hooks/loginSlice";
import QrcodeReducer from "@/hooks/qrSlice";
import ConfigReducer from "@/hooks/configSlice";

export const store = configureStore({
  reducer: {
    Login: LoginReducer,
    QRcode: QrcodeReducer,
    Config: ConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
