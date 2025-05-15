import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
// import logger from "./middleware/logger";
import api from "./middleware/api";

export default function createStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
  });
}
