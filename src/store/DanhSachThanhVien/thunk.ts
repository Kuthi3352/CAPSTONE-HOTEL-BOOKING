import { createAsyncThunk } from "@reduxjs/toolkit";

import { ListUserServices } from "services";

export const ListUserThunk = createAsyncThunk("Users/ListUser", async () => {
  const data = await ListUserServices.listUser();
  // console.log('data',data.data.content);
  return data.data.content;
});
export const EditUserThunk = createAsyncThunk(
  "Users/EditUser",
  async (payload: string) => {
    const data = await ListUserServices.EditUser(payload);

    // console.log(data.data.content);
    return data.data.content;
  }
);

export const DeleteUserThunk = createAsyncThunk(
  "Users/DeleteUser",
  async (payload: string, { dispatch }) => {
    const data = await ListUserServices.DeleteUser(payload);
    dispatch(ListUserThunk());
    return data.data.content;
  }
);
export const UpdateUserThunk = createAsyncThunk(
  "Users/UpdateUser",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (data: any, { dispatch }) => {
    const path = data.id;
    const payload = data.payload;

    const result = await ListUserServices.UpdateUser(path, payload);
    dispatch(ListUserThunk());

    console.log("uptate:", result.data.content);
    return data.data.content;
  }
);
