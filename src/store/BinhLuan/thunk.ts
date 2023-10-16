import { createAsyncThunk } from "@reduxjs/toolkit";
import { BinhLuanServices } from "services";

export const DanhGiaThunk = createAsyncThunk("DanhGia", async () => {
  const data = await BinhLuanServices.danhGia();
  return data.data.content;
});
