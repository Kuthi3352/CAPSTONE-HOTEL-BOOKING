import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListUserServices } from "services";
import { ListUserType } from "types/ListUserType";
import { toast } from "react-toastify";
import { handleError } from "utils";
export const ListUserThunk = createAsyncThunk("Users/ListUser", async () => {
  const data = await ListUserServices.listUser();
  return data.data.content;
});
export const EditUserThunk = createAsyncThunk(
  "Users/EditUser",
  async (payload: string) => {
    const data = await ListUserServices.EditUser(payload);
    return data.data.content;
  }
);

export const DeleteUserThunk = createAsyncThunk(
  "Users/DeleteUser",
  async (payload: string, { dispatch }) => {
    const data = await ListUserServices.DeleteUser(payload);
    dispatch(ListUserThunk());
    try {
      toast.success("Xóa thành công");
    } catch (err) {
      handleError(err);
    }
    return data.data.content;
  }
);
export const UpdateUserThunk = createAsyncThunk(
  "Users/UpdateUser",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (data2: { path: string; payload: ListUserType }, { dispatch }) => {
    const path = data2.path;
    const payload = data2.payload;
    const result = await ListUserServices.UpdateUser(path, payload);
    dispatch(ListUserThunk());
    try {
      toast.success("Cập nhật thành công");
    } catch (err) {
      handleError(err);
    }
    return result.data.content;
  }
);
export const UploadUserThunk = createAsyncThunk(
  "Users/UploadUser",
  async () => {
    const formData = new FormData();
    await ListUserServices.UploadUser(formData);
  }
);
