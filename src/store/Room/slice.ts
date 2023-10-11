import { createSlice } from "@reduxjs/toolkit";
import { RoomPosition, RoomType } from "types/RoomType";
import { getRoomPositionThunk, getRoomThunk } from "./thunk";

type initialStateType = {
  RoomList?: RoomType[];
  RoomPosition?: RoomPosition[];
};

const initialState: initialStateType = {};

const RoomSlice = createSlice({
  name: "RoomSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoomThunk.fulfilled, (state, { payload }) => {
        state.RoomList = payload;
      })
      .addCase(getRoomPositionThunk.fulfilled, (state, { payload }) => {
        state.RoomPosition = payload;
      });
  },
});

export const { reducer: RoomSliceReducer, actions: RoomSliceActions } =
  RoomSlice;
