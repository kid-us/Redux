import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "./features/cake";
import userSlice from "./features/user";
import iceCreamSlice from "./features/iceCream";

const store = configureStore({
  reducer: {
    user: userSlice,
    cake: cakeSlice,
    iceCream: iceCreamSlice,
  },
});

export default store;
