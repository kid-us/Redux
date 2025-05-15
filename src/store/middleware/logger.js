const logger = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  console.log("Next State:", store.getState());
  next(action);
  // return result;
  // const result = next(action); // Pass the action to the next middleware/reducer
};

export default logger;
