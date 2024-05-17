import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Conversas {
  selectConversa: string;
  activeContent: string | null;
}

const initialState: Conversas = {
  selectConversa: "",
  activeContent: null,
};

const ConversasSlice = createSlice({
  name: "Conversas",
  initialState,
  reducers: {
    setselectConversa: (state, action: PayloadAction<string>) => {
      state.selectConversa = action.payload;
    },
    setactiveContent: (state, action: PayloadAction<string | null>) => {
      state.activeContent = action.payload;
    },
  },
});
export const { setselectConversa, setactiveContent } = ConversasSlice.actions;
export default ConversasSlice.reducer;
