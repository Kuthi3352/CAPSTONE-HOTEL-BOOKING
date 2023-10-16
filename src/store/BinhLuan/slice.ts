import { createSlice } from "@reduxjs/toolkit";
import { BinhLuanType } from "types";
import { DanhGiaThunk } from "./thunk";

type BinhLuanInitialState = {
  danhGia?: BinhLuanType[];
};
const initialState: BinhLuanInitialState = {};
const BinhLuanSlice = createSlice({
  name: "BinhLuan",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(DanhGiaThunk.fulfilled, (state, { payload }) => {
      state.danhGia = payload;
    });
  },
});
export const { actions: BinhLuanActions, reducer: BinhLuanReducer } =
  BinhLuanSlice;
