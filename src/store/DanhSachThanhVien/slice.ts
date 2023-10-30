import { createSlice } from "@reduxjs/toolkit";
import { ListUserType } from "types/ListUserType";
import { EditUserThunk, ListUserThunk } from ".";

import { AccountSchemaType } from "schemas";

type ListUserInitialState = {
  listUser?: ListUserType[];
  EditUser?: ListUserType;
  chinhSuaUser?: ListUserType;
  updateUser?: AccountSchemaType;
  searchUser?: ListUserType[];
  isFetchingUser?: boolean;
};

const initialState: ListUserInitialState = { searchUser: undefined };
const ListUserSlice = createSlice({
  name: "listUser",
  initialState,
  reducers: {
    searchName: (state, { payload }) => {
      state.searchUser = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(ListUserThunk.fulfilled, (state, { payload }) => {
        state.listUser = payload;
        state.isFetchingUser = false;
      })
      .addCase(ListUserThunk.pending, (state) => {
        state.isFetchingUser = true;
      })
      .addCase(ListUserThunk.rejected, (state) => {
        state.isFetchingUser = false;
      })
      .addCase(EditUserThunk.fulfilled, (state, { payload }) => {
        state.EditUser = payload;
      });
  },
});
export const { actions: ListUserActions, reducer: ListUserReducer } =
  ListUserSlice;
