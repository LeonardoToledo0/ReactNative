import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Route } from "@/types/type";

interface Navigations {
  index: number;
  routes: Route[];
}
const initialState: Navigations = {
  index: 0,
  routes: [],
};
const NavigationsSlice = createSlice({
  name: "Navigations",
  initialState,
  reducers: {
    setindex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
    setroutes: (state, action: PayloadAction<[]>) => {
      state.routes = action.payload;
    },
  },
});

export const { setindex, setroutes } = NavigationsSlice.actions;
export default NavigationsSlice.reducer;
