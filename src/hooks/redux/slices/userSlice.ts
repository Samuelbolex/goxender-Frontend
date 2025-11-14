//import type { IUserProfile } from "@declared-types/index";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StateProps {
  profile: any | null;
}

const initialState: StateProps = {
  profile: null,
};

export const userSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    saveProfile: (state, action: PayloadAction<any | null>) => {
      state.profile = action.payload;
    },
    resetProfile: (state) => {
      state.profile = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveProfile, resetProfile } = userSlice.actions;

export default userSlice.reducer;
