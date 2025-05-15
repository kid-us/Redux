import axios from "axios";
import * as actions from "../api";

// Custom API middleware
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    next(action);

    const { url, data, method = "get", onSuccess, onError } = action.payload;

    try {
      const response = await axios.request({
        baseURL: "http://localhost:9001/api",
        url,
        method,
        data,
      });

      // General success action
      dispatch(actions.apiCallSuccess(response.data));
      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (error) {
      // General error action
      dispatch(actions.apiCallFailed(error.message));
      if (onError) {
        dispatch({ type: onError, payload: error.message });
      }
    }
  };

export default api;
