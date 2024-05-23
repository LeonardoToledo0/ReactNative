import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "@/hooks/loginSlice";
import QrcodeReducer from "@/hooks/qrSlice";
import ConfigReducer from "@/hooks/configSlice";
import FabReducer from "@/hooks/fabslice";
import NavigationsReducer from "@/hooks/navigationsSlice";
import ConversasReducer from "@/hooks/conversasSlice";
import UsuarioReducer from "@/hooks/usuarioSlice";

export const store = configureStore({
  reducer: {
    Login: LoginReducer,
    QRcode: QrcodeReducer,
    Config: ConfigReducer,
    Fab: FabReducer,
    Navigations: NavigationsReducer,
    Conversas: ConversasReducer,
    Usuario: UsuarioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
