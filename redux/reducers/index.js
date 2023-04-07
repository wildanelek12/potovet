import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";

export const reducers = combineReducers({
    sidebar: sidebarReducer
})
