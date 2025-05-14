import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectsReducer from "./projects";

const reducers = combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
});

export default reducers;
