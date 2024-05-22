"use client";
import dashboard from "./reducers/dashboard";
import rootReducer from "./reducers/theme";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    rootReducer: rootReducer,
    dashboard: dashboard,
  },
  middleware: (getDefaultMiddlleware) =>
    getDefaultMiddlleware({
      serializableCheck: false,
    }),
});

export default store;
