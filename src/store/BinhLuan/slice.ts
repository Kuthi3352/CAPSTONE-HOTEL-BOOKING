import { createSlice } from "@reduxjs/toolkit";
import { BinhLuanType, getBinhLuanType } from "types";
import { DanhGiaThunk, GetBinhLuanThunk } from "./thunk";

type BinhLuanInitialState = {
  danhGia?: BinhLuanType[];
  getBinhLuan?: getBinhLuanType[];
};
const initialState: BinhLuanInitialState = {};
const BinhLuanSlice = createSlice({
  name: "BinhLuan",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(DanhGiaThunk.fulfilled, (state, { payload }) => {
        state.danhGia = payload;
      })
      .addCase(GetBinhLuanThunk.fulfilled, (state, { payload }) => {
        state.getBinhLuan = payload;
      });
  },
});
export const { actions: BinhLuanActions, reducer: BinhLuanReducer } =
  BinhLuanSlice;
