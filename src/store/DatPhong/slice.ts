import { createSlice } from "@reduxjs/toolkit";
import { DatPhongType } from "types/DatPhongType";
import { EditDatPhongThunk, getDatPhongThunk } from "./thunk";

type DatPhongInitialState = {
  datPhongList?: DatPhongType[];
  editDatPhong?: DatPhongType;
};
const initialState: DatPhongInitialState = {};
const DatPhongSlice = createSlice({
  name: "DatPhongSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDatPhongThunk.fulfilled, (state, { payload }) => {
        state.datPhongList = payload;
      })
      .addCase(EditDatPhongThunk.fulfilled, (state, { payload }) => {
        state.editDatPhong = payload;
      });
  },
});
export const { actions: DatPhongAction, reducer: DatPhongReducer } =
  DatPhongSlice;
