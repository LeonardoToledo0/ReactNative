import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Config } from "@/types/type";

const initialState: Config = {
  selectConfig: "",
  activeContent: null,
};

const ConfigSlice = createSlice({
  name: "Config",
  initialState,
  reducers: {
    setselectConfig: (state, action: PayloadAction<string>) => {
      state.selectConfig = action.payload;
    },
    setactiveContent: (state, action: PayloadAction<string | null>) => {
      state.activeContent = action.payload;
    },
  },
});
export const { setselectConfig, setactiveContent } = ConfigSlice.actions;
export default ConfigSlice.reducer;
