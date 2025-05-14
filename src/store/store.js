import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

export default function createStore() {
  return configureStore({ reducer });
}
