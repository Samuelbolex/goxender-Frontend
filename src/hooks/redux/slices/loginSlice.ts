import { createSlice } from "@reduxjs/toolkit";

export interface IsLoginProps {
  isLogin: boolean;
}

const initialState: IsLoginProps = {
  isLogin: false,
};

export const isLoginSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    saveIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    resetIsLogin: (state) => {
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveIsLogin, resetIsLogin } = isLoginSlice.actions;

export default isLoginSlice.reducer;
