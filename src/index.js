import { bugAdded, bugRemoved, bugResolved } from "./actions";
import store from "./store";

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugResolved(1));

unsubscribe();

console.log(store.getState());
