import { combineReducers } from "@reduxjs/toolkit";
import { AuthLoginReducer } from "./Auth";
import { RoomSliceReducer } from "./Room/slice";
export const RootReducer = combineReducers({
    AuthLogin: AuthLoginReducer,
    RoomReducer: RoomSliceReducer
})