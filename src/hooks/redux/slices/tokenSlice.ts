import { createSlice } from "@reduxjs/toolkit";

export interface TokenProps {
  token: string | null;
  refreshToken: string | null;
}

const initialState: TokenProps = {
  token: null,
  refreshToken: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveToken, logout } = tokenSlice.actions;

export default tokenSlice.reducer;
