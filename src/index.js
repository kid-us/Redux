import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import { addProject, removeProject, updatePurchase } from "./store/projects";
import createStore from "./store/store";

const store = createStore();

// const unsubscribe = store.subscribe(() => {
//   console.log("Store Changed", store.getState());
// });

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugResolved({ id: 1 }));

store.dispatch(addProject({ name: "JavaScript" }));
store.dispatch(addProject({ name: "TypeScript" }));
store.dispatch(addProject({ name: "ReactNative" }));
store.dispatch(addProject({ name: "React" }));
store.dispatch(removeProject({ id: 4 }));
store.dispatch(updatePurchase({ id: 2 }));

// unsubscribe();

console.log(store.getState());
