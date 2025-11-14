import { createSlice } from "@reduxjs/toolkit";

export interface EmailProps {
  email: string | null;
}

const initialState: EmailProps = {
  email: null,
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    saveEmail: (state, action) => {
      state.email = action.payload;
    },
    resetEmail: (state) => {
      state.email = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveEmail, resetEmail } = emailSlice.actions;

export default emailSlice.reducer;
