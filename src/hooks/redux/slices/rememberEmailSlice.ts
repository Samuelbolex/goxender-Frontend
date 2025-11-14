import { createSlice } from "@reduxjs/toolkit";

export interface EmailProps {
  email: string | null;
}

const initialState: EmailProps = {
  email: null,
};

export const rememberEmailSlice = createSlice({
  name: "rememberEmail",
  initialState,
  reducers: {
    saveRemeberEmail: (state, action) => {
      state.email = action.payload;
    },
    resetRemeberEmail: (state) => {
      state.email = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveRemeberEmail, resetRemeberEmail } =
  rememberEmailSlice.actions;

export default rememberEmailSlice.reducer;
