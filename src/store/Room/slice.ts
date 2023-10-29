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
      })
      // .addCase(BookingThunk.fulfilled,()=>{
      //   console.log('dat phong thanh cong');

      // });
      .addCase(BookingHistoryThunk.fulfilled, (state, { payload }) => {
        state.bookingHistory = payload;
      });
  },
});

export const { reducer: RoomSliceReducer, actions: RoomSliceActions } =
  RoomSlice;
