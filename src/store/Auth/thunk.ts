import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemasType } from "schemas";
import { AuthServices } from "services";

export const AuthLoginThunk = createAsyncThunk(
  "Authlogin/login",
  async (payload: LoginSchemasType, { rejectWithValue }) => {
    try {
      const data = await AuthServices.login(payload);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
