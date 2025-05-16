const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Kidus",
  address: {
    city: "Nazret",
    state: "OR",
    street: "123 ET NZ",
  },
};

const updatedAddress = "updateAddress";

const updateAddress = (street) => {
  return {
    type: updatedAddress,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  if (action.type === updatedAddress) {
    // return {
    //   ...state,
    //   address: {
    //     ...state.address,
    //     street: action.payload,
    //   },
    // };
    return produce(state, (draft) => {
      draft.address.street = action.payload;
    });
  } else return state;
};

const store = redux.createStore(reducer);

console.log("Initial State :", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log(`Updated State`, store.getState())
);

store.dispatch(updateAddress("429 ET AB"));

unsubscribe();
