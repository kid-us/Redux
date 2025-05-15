const logger = (param) => (store) => (next) => (action) => {
  // console.log("Logging", param);

  // console.log("Dispatching:", action);
  // console.log("Next State:", store.getState());
  console.log(action);

  next(action);
  // return result;
  // const result = next(action); // Pass the action to the next middleware/reducer
};

export default logger;
