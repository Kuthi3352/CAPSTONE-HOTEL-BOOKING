import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RoomListService } from "services";
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
    const data = await RoomListService.getPosition();
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
  async (path: string) => {
    const data = await RoomListService.EditRoom(path);
    return data.data.content;
  }
);
export const UpdateRoomThunk = createAsyncThunk(
  "QuanLyPhong/UpdateRoom",
  async (result: { path: string; payload: RoomType }, { dispatch }) => {
    const path = result.path;
    const payload = result.payload;
    const data = await RoomListService.UpdateRoom(path, payload);
    dispatch(getRoomThunk());
    return data.data.content;
  }
);
export const DeleteRoomThunk = createAsyncThunk(
  "QuanLyPhong/DeleteRoom",
  async (path: string, { dispatch }) => {
    const data = await RoomListService.DeleteRoom(path);
    dispatch(getRoomThunk());
    return data.data.content;
  }
);
export const BookingThunk = createAsyncThunk(
  "QuanLyPhong/booking",
  async (payload: BookingRoom) => {
    await RoomListService.Booking(payload);
    try {
      toast.success("Đặt phòng thành công");
    } catch (error) {
      return handleError(error);
    }
  }
);
export const BookingHistoryThunk = createAsyncThunk(
  "QuanLyPhong/bookingHistory",
  async (path: string) => {
    const data = await RoomListService.BookingHistory(path);
    return data.data.content;
  }
);
