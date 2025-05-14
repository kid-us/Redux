import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
} from "./store/bugs";
import {
  addProject,
  removeProject,
  updatePurchase,
  getPurchasedProjects,
} from "./store/projects";
import createStore from "./store/store";

const store = createStore();

// const unsubscribe = store.subscribe(() => {
//   console.log("Store Changed", store.getState());
// });

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAdded({ description: "Bug 4" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 4 }));

store.dispatch(addProject({ name: "JavaScript" }));
store.dispatch(addProject({ name: "TypeScript" }));
store.dispatch(addProject({ name: "ReactNative" }));
store.dispatch(addProject({ name: "React" }));
store.dispatch(removeProject({ id: 4 }));
store.dispatch(updatePurchase({ id: 2 }));

// unsubscribe();

const unresolvedBugs = getUnresolvedBugs(store.getState());
const notPurchasedProjects = getPurchasedProjects(store.getState());

console.log(unresolvedBugs);
console.log(notPurchasedProjects);
