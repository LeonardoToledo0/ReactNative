import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QRcode } from "@/types/type";

const initialState: QRcode = {
  qrvalue: "",
};

const QRcodeSlice = createSlice({
  name: "QRcode",
  initialState,
  reducers: {
    setqrvalue: (state, action: PayloadAction<string>) => {
      state.qrvalue = action.payload;
    },
  },
});
export const { setqrvalue } = QRcodeSlice.actions;
export default QRcodeSlice.reducer;
