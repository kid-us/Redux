import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import createStore from "./store/store";

const store = createStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugResolved({ id: 1 }));

unsubscribe();

console.log(store.getState());
