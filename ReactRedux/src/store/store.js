import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake";
import userReducer from "./features/user";
import iceCreamReducer from "./features/iceCream";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
});

export default store;
