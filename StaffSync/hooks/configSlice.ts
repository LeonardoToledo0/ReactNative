import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Config {
  selectConfig: string | null;
  activeContent: string | null;
}

const initialState: Config = {
  selectConfig: null,
  activeContent: null,
};

const ConfigSlice = createSlice({
  name: "Config",
  initialState,
  reducers: {
    setselectConfig: (state, action: PayloadAction<string | null>) => {
      state.selectConfig = action.payload;
    },
    setactiveContent: (state, action: PayloadAction<string | null>) => {
      state.activeContent = action.payload;
    },
  },
});
export const { setselectConfig, setactiveContent } = ConfigSlice.actions;
export default ConfigSlice.reducer;
