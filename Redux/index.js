const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// Actions
const cakeOrdered = "cakeOrdered";
const restockCakes = "restockCake";

const iceCreamOrdered = "iceCreamOrdered";
const restockIceCreams = "restockIceCream";

function orderCake(qty = 1) {
  return {
    type: cakeOrdered,
    payload: qty,
  };
}

function restockCake(qty = 1) {
  return {
    type: restockCakes,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: iceCreamOrdered,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: restockIceCreams,
    payload: qty,
  };
}

// Reducer
const initialCakeState = {
  numOfCake: 10,
};

const initialIceCreamState = {
  numOfIceCream: 20,
};

// Cake Reducer
const cakeReducer = (state = initialCakeState, action) => {
  if (action.type === cakeOrdered) {
    return {
      ...state,
      numOfCake: state.numOfCake - 1,
    };
  } else if (action.type === restockCakes) {
    return {
      ...state,
      numOfCake: state.numOfCake + action.payload,
    };
  } else return state;
};

// IceCream Reducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
  if (action.type === iceCreamOrdered) {
    return {
      ...state,
      numOfIceCream: state.numOfIceCream - 1,
    };
  } else if (action.type === restockIceCreams) {
    return {
      ...state,
      numOfIceCream: state.numOfIceCream + action.payload,
    };
  }
  return state;
};

const rootReducers = combineReducers({
  cake: cakeReducer,
  iecCream: iceCreamReducer,
});

const store = createStore(rootReducers, applyMiddleware(logger));

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {});

// Bind  Action Creators
const actions = bindActionCreators(
  { orderCake, restockCake, restockIceCream, orderIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unsubscribe();
