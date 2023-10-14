import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomListService, RoomService } from "services";

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
  async (query:string) => {
    const data = await RoomListService.getRoomListByPosition(query);
    // console.log(data.data.content); 
    return data.data.content
  }
);