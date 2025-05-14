import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectsReducer from "./projects";

const reducers = combineReducers({
  bugs: bugsReducer,
  project: projectsReducer,
});

export default reducers;
