import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slices/userSlice";
import { tokenSlice } from "../slices/tokenSlice";
import { emailSlice } from "../slices/emailSlice";
import { persistReducer, persistStore } from "redux-persist";
import { isLoginSlice } from "../slices/loginSlice";
import { rememberEmailSlice } from "../slices/rememberEmailSlice";
import storage from "redux-persist/lib/storage";
import { menuSlice } from "../slices/menuSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  userProfile: userSlice.reducer,
  token: tokenSlice.reducer,
  email: emailSlice.reducer,
  isLogin: isLoginSlice.reducer,
  rememberEmail: rememberEmailSlice.reducer,
  openMenu: menuSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
