import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAddedToUser,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";

import {
  addProject,
  removeProject,
  updatePurchase,
  getPurchasedProjects,
} from "./store/projects";

import createStore from "./store/store";
import { addUsers } from "./store/users";

const store = createStore();

// const unsubscribe = store.subscribe(() => {
//   console.log("Store Changed", store.getState());
// });

// Bugs
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAdded({ description: "Bug 4" }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugRemoved({ id: 4 }));
// store.dispatch(bugAddedToUser({ bugId: 1, userId: 1 }));

// Projects
// store.dispatch(addProject({ name: "JavaScript" }));
// store.dispatch(addProject({ name: "TypeScript" }));
// store.dispatch(addProject({ name: "ReactNative" }));
// store.dispatch(addProject({ name: "React" }));
// store.dispatch(removeProject({ id: 4 }));
// store.dispatch(updatePurchase({ id: 2 }));

// Users
store.dispatch(addUsers({ name: "Lorem" }));

// unsubscribe();

const unresolvedBugs = getUnresolvedBugs(store.getState());
const notPurchasedProjects = getPurchasedProjects(store.getState());
const bugsByUser = getBugsByUser(1)(store.getState());

console.log(unresolvedBugs);
console.log(notPurchasedProjects);
console.log(bugsByUser);
