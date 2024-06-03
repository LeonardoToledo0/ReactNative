import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Fab } from "@/types/type";

const initialState: Fab = {
  open: false,
};
const FabSlice = createSlice({
  name: "Fab",
  initialState,
  reducers: {
    setopen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setopen } = FabSlice.actions;
export default FabSlice.reducer;
