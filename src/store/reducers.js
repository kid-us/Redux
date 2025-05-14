import { combineReducers } from "redux";
import reducers from "./entities";

const reducer = combineReducers({
  entities: reducers,
});

export default reducer;
