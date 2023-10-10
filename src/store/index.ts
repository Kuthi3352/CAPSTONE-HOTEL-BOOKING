import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./RootReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: RootReducer,
});
type AppDispatch = (typeof store)['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch