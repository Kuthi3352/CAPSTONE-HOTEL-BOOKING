import { createAsyncThunk } from "@reduxjs/toolkit";
import { PositionService } from "services/PositionService";
import { PositionType } from "types/PositinonType";
import { wait } from "utils";
import { toast } from "react-toastify";
import { handleError } from "utils";

export const getPostionListThunk = createAsyncThunk(
  "QuanLyViTri/danhsach",
  async () => {
    const data = await PositionService.getPosition();
    await wait(1000);
    return data.data.content;
  }
);
export const EditLocationThunk = createAsyncThunk(
  "QuanLyViTri/EditLocation",
  async (path: string) => {
    const data = await PositionService.EditLocation(path);
    return data.data.content;
  }
);
export const UpdateLocationThunk = createAsyncThunk(
  "QuanLyViTri/UpdateLocation",
  async (result: { path: string; payload: PositionType }, { dispatch }) => {
    const path = result.path;
    const payload = result.payload;
    const data = await PositionService.UpdateLocation(path, payload);
    dispatch(getPostionListThunk());
    return data.data.content;
  }
);
export const DeleteLocationThunk = createAsyncThunk(
  "QuanLyViTri/DeleteLocation",
  async (path: string, { dispatch }) => {
    const data = await PositionService.DeleteLocation(path);
    try {
      toast.success("Xóa thành công");
    } catch (err) {
      handleError(err);
    }
    dispatch(getPostionListThunk());
    return data.data.content;
  }
);
