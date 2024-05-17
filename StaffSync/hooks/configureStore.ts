import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "@/hooks/loginSlice";
import QrcodeReducer from "@/hooks/qrSlice";
import ConfigReducer from "@/hooks/configSlice";
import FabReducer from "@/hooks/fabslice";
import NavigationsReducer from "@/hooks/navigationsSlice";

export const store = configureStore({
  reducer: {
    Login: LoginReducer,
    QRcode: QrcodeReducer,
    Config: ConfigReducer,
    Fab: FabReducer,
    Navigations: NavigationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
