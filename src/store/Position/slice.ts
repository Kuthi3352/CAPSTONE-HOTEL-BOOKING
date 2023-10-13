import { createSlice } from "@reduxjs/toolkit";
import { PositionType } from "types/PositinonType";
import { getPostionListThunk } from "./thunks";

type PositionStateType = {
  PositionList?: PositionType[];
};
const initialState: PositionStateType = {};

const PositionSlice = createSlice({
  name: "Position",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostionListThunk.fulfilled, (state, { payload }) => {
      state.PositionList = payload;
    });
  },
});

export const { reducer: PositionSliceReducer, actions: PositionSliceActions } =
  PositionSlice;
