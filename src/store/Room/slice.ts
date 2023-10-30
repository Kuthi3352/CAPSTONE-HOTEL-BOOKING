import { createSlice } from "@reduxjs/toolkit";
import { BookingRoom, RoomPosition, RoomType } from "types/RoomType";
import {
  BookingHistoryThunk,
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
  bookingHistory?: BookingRoom[];
  isFetchingRoom?: boolean;
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
        state.isFetchingRoom = false;
      })
      .addCase(getRoomThunk.pending, (state) => {
        state.isFetchingRoom = true;
      })
      .addCase(getRoomThunk.rejected, (state) => {
        state.isFetchingRoom = false;
      })
      .addCase(getRoomPositionThunk.fulfilled, (state, { payload }) => {
        state.roomPosition = payload;
      })
      .addCase(getRoomDetailThunk.fulfilled, (state, { payload }) => {
        state.currentRoom = payload;
        state.isFetchingRoom = false;
      })
      .addCase(getRoomDetailThunk.pending, (state) => {
        state.isFetchingRoom = true;
      })
      .addCase(getRoomDetailThunk.rejected, (state) => {
        state.isFetchingRoom = false;
      })
      .addCase(getRoomListByPositionThunk.fulfilled, (state, { payload }) => {
        state.roomListByPosition = payload;
        state.isFetchingRoom = false;
      })
      .addCase(getRoomListByPositionThunk.pending, (state) => {
        state.isFetchingRoom = true;
      })
      .addCase(getRoomListByPositionThunk.rejected, (state) => {
        state.isFetchingRoom = false;
      })

      .addCase(EditRoomThunk.fulfilled, (state, { payload }) => {
        state.EditRoom = payload;
      })

      .addCase(BookingHistoryThunk.fulfilled, (state, { payload }) => {
        state.bookingHistory = payload;
      });
  },
});

export const { reducer: RoomSliceReducer, actions: RoomSliceActions } =
  RoomSlice;
