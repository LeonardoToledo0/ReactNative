import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-test-renderer";

interface Login {
  login: any[];
  email: string;
  password: string;
  loading: boolean;
  erro: string | null;
  activeContent: string | null;
  selectedButton: string | null;
  isAppLoaded: boolean;
}

const initialState: Login = {
  login: [],
  email: "",
  password: "",
  loading: true,
  erro: null,
  activeContent: null,
  selectedButton: null,
  isAppLoaded: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setlogin: (state, action: PayloadAction<any[]>) => {
      state.login = action.payload;
    },
    setemail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setpassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setloading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    seterro: (state, action: PayloadAction<string | null>) => {
      state.erro = action.payload;
    },

    setactiveContent: (state, action: PayloadAction<string | null>) => {
      state.activeContent = action.payload;
    },
    setselectedButton: (state, action: PayloadAction<string | null>) => {
      state.selectedButton = action.payload;
    },
    setisAppLoaded: (state, action: PayloadAction<boolean>) => {
      state.isAppLoaded = action.payload;
    },
  },
});

export const {
  setemail,
  seterro,
  setloading,
  setlogin,
  setpassword,
  setactiveContent,
  setselectedButton,
  setisAppLoaded,
} = loginSlice.actions;

export default loginSlice.reducer;
