import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import { authApi } from "../services/authApi";

export const reducers = combineReducers({
    sidebar: sidebarReducer,
    [authApi.reducerPath]: authApi.reducer
})
