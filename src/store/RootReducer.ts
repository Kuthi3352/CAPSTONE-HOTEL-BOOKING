import { combineReducers } from "@reduxjs/toolkit";
import { AuthLoginReducer } from "./Auth";
import { RoomSliceReducer } from "./Room/slice";
import { PositionSliceReducer } from "./Position/slice";
export const RootReducer = combineReducers({
  AuthLogin: AuthLoginReducer,
  RoomReducer: RoomSliceReducer,
  PositionReducer: PositionSliceReducer,
});
