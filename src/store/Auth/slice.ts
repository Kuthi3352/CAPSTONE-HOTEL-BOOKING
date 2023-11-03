import { createSlice } from "@reduxjs/toolkit";
import { AuthLoginThunk } from ".";
import { AuthType } from "types/AuthType";
import { getAccessToken, getUserInfoLocal } from "utils";

type AuthLoginInitialState = {
  token?: string;
  AuthLogin?: AuthType;
  isLogin?: boolean;
  isFetchingLogin?: boolean;
  currentPage?: string;
};
const initialState: AuthLoginInitialState = {
  token: getAccessToken(),
  isLogin: false,
};
const AuthLoginSlice = createSlice({
  name: "AuthLogin",
  initialState,
  reducers: {
    getLogin: (state) => {
      const Token = getAccessToken();
      if (Token) {
        state.isLogin = true;
        state.AuthLogin = getUserInfoLocal();
      }
    },
    logOut: (state) => {
      state.token = undefined;
      state.AuthLogin = undefined;
      state.isLogin = false;
      localStorage.removeItem("ACCESSTOKEN");
      localStorage.removeItem("USER");
    },
    takeCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(AuthLoginThunk.pending, (state) => {
        state.isFetchingLogin = true;
      })
      .addCase(AuthLoginThunk.fulfilled, (state, { payload }) => {
        localStorage.setItem(
          "USER",
          JSON.stringify({
            id: payload.user.id,
            userName: payload.user.name,
            role: payload.user.role,
          })
        );
        localStorage.setItem("ACCESSTOKEN", payload.token);
        state.AuthLogin = payload;
        state.isLogin = true;
        state.isFetchingLogin = false;
      })
      .addCase(AuthLoginThunk.rejected, (state) => {
        state.isFetchingLogin = false;
      });
  },
});
export const { actions: AuthLoginActions, reducer: AuthLoginReducer } =
  AuthLoginSlice;
