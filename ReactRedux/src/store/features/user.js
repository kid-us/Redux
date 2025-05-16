import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builders) => {
    builders.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builders.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });

    builders.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.user = [];
      state.error = "";
    });
  },
});

export default userSlice.reducer;
