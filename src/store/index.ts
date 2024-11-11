import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import sidebarReducer from "./slicers/sidebar.slicer";
import authReducer from "./slicers/auth.slicer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "jhyappai-sms",
  storage,
};

const reducers = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
