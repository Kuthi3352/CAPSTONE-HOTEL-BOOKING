import { createAsyncThunk } from "@reduxjs/toolkit";
import { DatPhongServices } from "services/DatPhongServices";
import { DatPhongType } from "types/DatPhongType";
import { toast } from "react-toastify";
import { handleError } from "utils";
export const getDatPhongThunk = createAsyncThunk(
  "getDatPhongThunk",
  async () => {
    const data = await DatPhongServices.getDatPhongList();
    return data.data.content;
  }
);
export const EditDatPhongThunk = createAsyncThunk(
  "getDatPhongThunk/EditDatPhong",
  async (path: string) => {
    const data = await DatPhongServices.EditDatPhong(path);
    return data.data.content;
  }
);
export const UpdateDatPhongThunk = createAsyncThunk(
  "getDatPhongThunk/UpdateDatPhong",
  async (result: { path: string; payload: DatPhongType }, { dispatch }) => {
    const path = result.path;
    const payload = result.payload;
    const data = await DatPhongServices.UpdateDatPhong(path, payload);
    dispatch(getDatPhongThunk());
    try {
      toast.success("Cập nhật thành công");
    } catch (err) {
      handleError(err);
    }
    return data.data.content;
  }
);
export const DeleteDatPhongThunk = createAsyncThunk(
  "getDatPhongThunk/DeleteDatPhong",
  async (path: string, { dispatch }) => {
    const data = await DatPhongServices.DeleteDatPhong(path);
    try {
      toast.success("Xóa thành công");
    } catch (err) {
      handleError(err);
    }
    dispatch(getDatPhongThunk());
    return data.data.content;
  }
);
