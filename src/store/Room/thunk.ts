import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomListService } from "services";
import { BookingRoom, RoomType } from "types/RoomType";
import { handleError, wait } from "utils";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

export const getRoomThunk = createAsyncThunk(
  "QuanLyPhong/danhsach",
  async () => {
    const data = await RoomListService.getRoom();
    await wait(1000);
    return data.data.content;
  }
);

export const getRoomPositionThunk = createAsyncThunk(
  "QuanLyPhong/vitri",
  async () => {
    const data = await RoomListService.getPosition();
    await wait(1000);

    return data.data.content;
  }
);

export const getRoomDetailThunk = createAsyncThunk(
  "QuanLyPhong/chitiet",
  async (query: string) => {
    const data = await RoomListService.getRoomDetail(query);
    await wait(1000);

    return data.data.content;
  }
);

export const getRoomListByPositionThunk = createAsyncThunk(
  "QuanLyPhong/phongvitri",
  async (query: string) => {
    const data = await RoomListService.getRoomListByPosition(query);

    await wait(1000);
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
  async (
    result: { path: string; payload: RoomType },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const path = result.path;
      const payload = result.payload;
      const data = await RoomListService.UpdateRoom(path, payload)
        .then((response: AxiosResponse) => {
          dispatch(getRoomThunk());
          return response;
        })
        .catch((error: AxiosError) => {
          throw error;
        });

      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const DeleteRoomThunk = createAsyncThunk(
  "QuanLyPhong/DeleteRoom",
  async (path: string, { dispatch, rejectWithValue }) => {
    try {
      const data = await RoomListService.DeleteRoom(path);
      dispatch(getRoomThunk());
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
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
