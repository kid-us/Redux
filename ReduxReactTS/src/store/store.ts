import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user";
import cakeReducer from "./features/cake/cake";
import iceCreamReducer from "./features/icecream/icecream";

const store = configureStore({
  reducer: {
    user: userReducer,
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
