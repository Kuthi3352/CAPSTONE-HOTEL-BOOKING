import { createAsyncThunk } from "@reduxjs/toolkit";

import { BinhLuanServices } from "services";
import { BinhLuanType } from "types";

export const DanhGiaThunk = createAsyncThunk("DanhGia", async () => {
  const data = await BinhLuanServices.danhGia();
  return data.data.content;
});

export const BinhLuanThunk = createAsyncThunk(
  "BinhLuan",
  async (payload: BinhLuanType) => {
    const data = await BinhLuanServices.binhLuan(payload);
    return data.data.content;
  }
);

export const DeleteBinhLuanThunk = createAsyncThunk(
  "BinhLuan/Delete",
  async (path: string, { dispatch }) => {
    const data = await BinhLuanServices.DeleteBinhLuan(path);

    dispatch(DanhGiaThunk());
    return data.data.content;
  }
);

export const GetBinhLuanThunk = createAsyncThunk(
  "BinhLuan/getBinhLuan",
  async (path: string) => {
    const data = await BinhLuanServices.getBinhLuan(path);
    return data.data.content;
  }
);
