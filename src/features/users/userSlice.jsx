import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("posts/userPosts", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
      // we could have used state.push by spreading the action payload
      // returning the full action payload that means it replaces user state
    });
  },
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
