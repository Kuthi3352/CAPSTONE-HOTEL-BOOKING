import { createSlice } from "@reduxjs/toolkit";
import { AuthLoginThunk } from ".";
import { AuthType } from "types/AuthType";
import { getAccessToken } from "utils";

type AuthLoginInitialState = {
  token?: string;
  AuthLogin?: AuthType;
  isLogin?: boolean;
};
const initialState: AuthLoginInitialState = {
  token: getAccessToken(),
  isLogin:false
};
const AuthLoginSlice = createSlice({
  name: "AuthLogin",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = undefined;
      state.AuthLogin = undefined;
      state.isLogin = false;
      localStorage.removeItem("ACCESSTOKEN");
      localStorage.removeItem("USER");
    },
  },
  extraReducers(builder) {
    builder.addCase(AuthLoginThunk.fulfilled, (state, { payload }) => {
      localStorage.setItem(
        "USER",
        JSON.stringify({
          id: payload.user.id,
          userName: payload.user.name,
        })
      );
      localStorage.setItem("ACCESSTOKEN", payload.token);
      state.AuthLogin = payload;
      state.isLogin = true;
    });
  },
});
export const { actions: AuthLoginActions, reducer: AuthLoginReducer } =
  AuthLoginSlice;
