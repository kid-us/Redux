import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface State {
  numOfIceCream: number;
}

const initialState: State = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCream += action.payload;
    },
  },
});

export const { ordered, restocked } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
