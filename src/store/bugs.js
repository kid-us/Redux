import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const bugSlice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // Add Bugs
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    // Update Resolved
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      if (index !== -1) bugs[index].resolved = true;
    },

    // Delete Bug
    bugRemoved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      if (index !== -1) bugs.splice(index, 1);
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = bugSlice.actions;

export default bugSlice.reducer;
