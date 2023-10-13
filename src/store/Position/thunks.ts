import { createAsyncThunk } from "@reduxjs/toolkit";
import { PositionService } from "services/PositionService";

export const getPostionListThunk = createAsyncThunk(
  "QuanLyViTri/danhsach",
  async () => {
    const data = await PositionService.getPosition();
    return data.data.content
  }
);
