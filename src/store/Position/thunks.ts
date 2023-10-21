import { createAsyncThunk } from "@reduxjs/toolkit";
import { PositionService } from "services/PositionService";
import { PositionType } from "types/PositinonType";

export const getPostionListThunk = createAsyncThunk(
  "QuanLyViTri/danhsach",
  async () => {
    const data = await PositionService.getPosition();
    return data.data.content;
  }
);
export const EditLocationThunk = createAsyncThunk(
  "QuanLyViTri/EditLocation",
  async (path: number) => {
    const data = await PositionService.EditLocation(path);
    return data.data.content;
  }
);
export const UpdateLocationThunk = createAsyncThunk(
  "QuanLyViTri/UpdateLocation",
  async (result: { path: number; payload: PositionType }, { dispatch }) => {
    const path = result.path;
    const payload = result.payload;
    const data = await PositionService.UpdateLocation(path, payload);
    dispatch(getPostionListThunk());
    return data.data.content;
  }
);
export const DeleteLocationThunk = createAsyncThunk(
  "QuanLyViTri/DeleteLocation",
  async (path: number, { dispatch }) => {
    const data = await PositionService.DeleteLocation(path);
    dispatch(getPostionListThunk());
    return data.data.content;
  }
);
// export const UploadPhotoThunk = createAsyncThunk(
//   "QuanLyViTri/uploadHinh",
//   async (maViTri: string, formData: FormData) => {
//     console.log(data.data.content);
//   }
// );


