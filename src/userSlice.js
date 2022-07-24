import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  entries: 0,
  joined: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.entries = action.payload.entries;
      state.joined = action.payload.joined;
    },

    userLogOut: () => {
      return initialState;
    },

    updateEntries: (state, action) => {
      state.entries = action.payload;
    },
  },
});

export const { loadUser, userLogOut, updateEntries } = userSlice.actions;
export default userSlice.reducer;
