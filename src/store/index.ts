import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./RootReducer";
import { useDispatch } from "react-redux";
import { AuthLoginActions } from "./Auth";

export const store = configureStore({
    reducer: RootReducer,
});


store.dispatch(AuthLoginActions.getLogin());
type AppDispatch = (typeof store)['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<(typeof store)['getState']>