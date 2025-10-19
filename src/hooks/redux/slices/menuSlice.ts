import { createSlice } from "@reduxjs/toolkit";

export interface IsLoginProps {
  isOpen: boolean;
}

const initialState: IsLoginProps = {
  isOpen: false,
};

export const menuSlice = createSlice({
  name: "openMenu",
  initialState,
  reducers: {
    openMenuModal: (state, action) => {
      state.isOpen = action.payload;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openMenuModal, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
