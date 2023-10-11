import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomService } from "services";

export const getRoomThunk = createAsyncThunk(
  "QuanLyPhong/danhsach",
  async () => {
    const data = await RoomService.getRoom();
    console.log(data.data.content);
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
