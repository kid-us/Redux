import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import CreateStoreConfigure from "./store/store";

const store = CreateStoreConfigure();

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugResolved(1));

unsubscribe();

console.log(store.getState());
