import { combineReducers } from "@reduxjs/toolkit";
import { AuthLoginReducer } from "./Auth";
export const RootReducer = combineReducers({
    AuthLogin: AuthLoginReducer
})