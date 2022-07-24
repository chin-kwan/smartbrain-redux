import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setRoute: (state, action) => {
      state.route = action.payload;
    },

    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },

    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },

    setBox: (state, action) => {
      state.box = action.payload;
    },

    resetApp: () => {
      return initialState;
    },
  },
});

export const { setRoute, setSignedIn, setImageUrl, setBox, resetApp } =
  appSlice.actions;
export default appSlice.reducer;
