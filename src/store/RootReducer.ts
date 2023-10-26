import { combineReducers } from "@reduxjs/toolkit";
import { AuthLoginReducer } from "./Auth";
import { RoomSliceReducer } from "./Room/slice";
import { PositionSliceReducer } from "./Position/slice";
import { ListUserReducer } from "./DanhSachThanhVien";
import { BinhLuanReducer } from "./BinhLuan";
import { DatPhongReducer } from "./DatPhong";
export const RootReducer = combineReducers({
  AuthLogin: AuthLoginReducer,
  ListReducer: ListUserReducer,
  RoomReducer: RoomSliceReducer,
  PositionReducer: PositionSliceReducer,
  BinhLuanReducer: BinhLuanReducer,
  DatPhongReducer: DatPhongReducer,
});
