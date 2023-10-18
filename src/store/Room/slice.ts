import { createSlice } from "@reduxjs/toolkit";
import { RoomPosition, RoomType } from "types/RoomType";
import {
  EditRoomThunk,
  getRoomDetailThunk,
  getRoomListByPositionThunk,
  getRoomPositionThunk,
  getRoomThunk,
} from "./thunk";

type initialStateType = {
  roomList?: RoomType[];
  roomPosition?: RoomPosition[];
  currentRoom?: RoomType;
  roomListByPosition?: RoomType[];
  EditRoom?: RoomType;
};

const initialState: initialStateType = {};

const RoomSlice = createSlice({
  name: "RoomSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoomThunk.fulfilled, (state, { payload }) => {
        state.roomList = payload;
      })
      .addCase(getRoomPositionThunk.fulfilled, (state, { payload }) => {
        state.roomPosition = payload;
      })
      .addCase(getRoomDetailThunk.fulfilled, (state, { payload }) => {
        state.currentRoom = payload;
      })
      .addCase(getRoomListByPositionThunk.fulfilled, (state, { payload }) => {
        state.roomListByPosition = payload;
      })
      .addCase(EditRoomThunk.fulfilled, (state, { payload }) => {
        state.EditRoom = payload;
      });
  },
});

export const { reducer: RoomSliceReducer, actions: RoomSliceActions } =
  RoomSlice;
