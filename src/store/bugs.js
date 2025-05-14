import { createAction, createReducer } from "@reduxjs/toolkit";

let lastId = 0;

// Actions
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved"); // ✅ fix action type

// Modern reducer using builder callback
const reducer = createReducer([], (builder) => {
  builder
    // Create Bug
    .addCase(bugAdded.type, (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    })

    // Update Resolved
    .addCase(bugResolved.type, (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      if (index !== -1) bugs[index].resolved = true;
    })

    // Remove Bug
    .addCase(bugRemoved.type, (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      if (index !== -1) bugs.splice(index, 1);
    });
});

export default reducer;
