import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "./cake";

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },

    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams =
        state.numOfIceCreams > 1 && state.numOfIceCreams - 1;
    });
  },
});

export const { ordered, restocked } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
