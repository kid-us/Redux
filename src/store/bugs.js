import { createAction } from "@reduxjs/toolkit";

// Creating Actions
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugResolved");

let lastId = 0;

export default function reducer(state = [], action) {
  // Bug Added
  if (action.type === bugAdded.type)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  // Bug Removed
  else if (action.type === bugRemoved.type)
    return state.filter((bug) => bug.id !== action.payload.id);
  // Bug Resolved
  else if (action.type === bugResolved.type)
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );

  return state;
}
