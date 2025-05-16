const axios = require("axios");
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require("redux-thunk").thunk;
// Initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Action types
const FETCH_USERS_REQUESTED = "fetchUsersRequested";
const FETCH_USERS_SUCCEEDED = "fetchUsersSucceeded";
const FETCH_USERS_FAILED = "fetchUsersFailed";

// Action creators
const fetchUsersRequested = () => ({
  type: FETCH_USERS_REQUESTED,
});

const fetchUsersSucceeded = (users) => ({
  type: FETCH_USERS_SUCCEEDED,
  payload: users,
});

const fetchUsersFailed = (error) => ({
  type: FETCH_USERS_FAILED,
  payload: error,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCEEDED:
      return { loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAILED:
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

// Async action creator (Thunk)
const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequested());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUsersSucceeded(response.data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error.message));
      });
  };
};

// Store
const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log("Updated State", store.getState()));

store.dispatch(fetchUsers());
