import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const bugSlice = createSlice({
  name: "bugs",
  initialState: [
    {
      list: [],
      loading: false,
      lastFetch: null,
    },
  ],
  reducers: {
    // Add Bugs
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    // Add Bugs to the User
    bugAddedToUser: (bugs, action) => {
      const { userId, bugId } = action.payload;

      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    // Update Resolved
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      if (index !== -1) bugs.list[index].resolved = true;
    },

    // Delete Bug
    bugRemoved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      if (index !== -1) bugs.list.splice(index, 1);
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved, bugAddedToUser } =
  bugSlice.actions;

export default bugSlice.reducer;

// Selector

// Bugs by User Selector
export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId)
  );

// Unresolved Bugs Selector
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);
