import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectsReducer from "./projects";
import userReducer from "./users";

const reducers = combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: userReducer,
});

export default reducers;
