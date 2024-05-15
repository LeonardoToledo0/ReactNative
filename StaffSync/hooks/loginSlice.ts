import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Login {
  login: any[];
  email: string;
  password: string;
  loading: boolean;
  erro: string | null;
  activeContent: string | null;
  selectedButton: string | null;
}

const initialState: Login = {
  login: [],
  email: "",
  password: "",
  loading: true,
  erro: null,
  activeContent: null,
  selectedButton: null,
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
} = loginSlice.actions;

export default loginSlice.reducer;
