import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import appSlice from "./Slices/appSlice";
import userSlice from "./Slices/userSlice";

// No sabemos como quitar el Card Slice sin romper el codigo
const reducers = combineReducers({
  app: appSlice,
  user: userSlice,
});

const rootPersistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
