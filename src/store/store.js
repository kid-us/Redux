import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import logger from "./middleware/logger";

export default function createStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger({ destination: "console" })),
  });
}
