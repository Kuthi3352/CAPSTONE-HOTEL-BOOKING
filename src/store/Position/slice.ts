import { createSlice } from "@reduxjs/toolkit";
import { PositionType } from "types/PositinonType";
import { EditLocationThunk, getPostionListThunk } from "./thunks";

type PositionStateType = {
  PositionList?: PositionType[];
  EditLocation?: PositionType;
};
const initialState: PositionStateType = {};

const PositionSlice = createSlice({
  name: "Position",
  initialState,
  reducers: {
    uploadLocation: (state, { payload }) => {
      state.PositionList = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostionListThunk.fulfilled, (state, { payload }) => {
        state.PositionList = payload;
      })
      .addCase(EditLocationThunk.fulfilled, (state, { payload }) => {
        state.EditLocation = payload;
      });
  },
});

export const { reducer: PositionSliceReducer, actions: PositionSliceActions } =
  PositionSlice;
