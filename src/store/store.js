import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";

export default function createStore() {
  return configureStore({ reducer });
}
