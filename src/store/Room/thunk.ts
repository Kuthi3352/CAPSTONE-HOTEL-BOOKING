import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomListService, RoomService } from "services";
import { BookingRoom, RoomType } from "types/RoomType";
import { handleError } from "utils";

export const getRoomThunk = createAsyncThunk(
  "QuanLyPhong/danhsach",
  async () => {
    const data = await RoomListService.getRoom();
    // console.log(data.data.content);
    return data.data.content;
  }
);

export const getRoomPositionThunk = createAsyncThunk(
  "QuanLyPhong/vitri",
  async () => {
    const data = await RoomService.getPosition();
    // console.log(data.data.content);
    return data.data.content;
  }
);

export const getRoomDetailThunk = createAsyncThunk(
  "QuanLyPhong/chitiet",
  async (query: string) => {
    const data = await RoomListService.getRoomDetail(query);
    // console.log(data.data.content);
    return data.data.content;
  }
);

export const getRoomListByPositionThunk = createAsyncThunk(
  "QuanLyPhong/phongvitri",
  async (query: string) => {
    const data = await RoomListService.getRoomListByPosition(query);
    // console.log(data.data.content);
    return data.data.content;
  }
);
export const EditRoomThunk = createAsyncThunk(
  "QuanLyPhong/EditRoom",
  async (path: number) => {
    const data = await RoomListService.EditRoom(path);
    return data.data.content;
  }
);
export const UpdateRoomThunk = createAsyncThunk(
  "QuanLyPhong/UpdateRoom",
  async (result: { path: number; payload: RoomType }, { dispatch }) => {
    const path = result.path;
    const payload = result.payload;
    const data = await RoomListService.UpdateRoom(path, payload);
    dispatch(getRoomThunk());
    return data.data.content;
  }
);
export const DeleteRoomThunk = createAsyncThunk(
  "QuanLyPhong/DeleteRoom",
  async (path: number, { dispatch }) => {
    const data = await RoomListService.DeleteRoom(path);
    dispatch(getRoomThunk());
    return data.data.content;
  }
);
export const BookingThunk = createAsyncThunk(
  "QuanLyPhong/booking",
  async (payload: BookingRoom) => {
    await RoomService.Booking(payload);
    try {
      alert("Đặt phòng thành công");
    } catch (error) {
      return handleError(error);
    }
  }
);
