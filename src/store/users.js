import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const userSlice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {
    // Add User
    addUsers: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { addUsers } = userSlice.actions;
export default userSlice.reducer;
