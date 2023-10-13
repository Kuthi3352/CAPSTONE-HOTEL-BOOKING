import {  PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthLoginThunk } from '.'
import {  AuthType} from 'types/AuthType'
import { getAccessToken } from 'utils'

type AuthLoginInitialState = {
    token?: string;
    AuthLogin?: AuthType;
}
const initialState: AuthLoginInitialState = {
    token: getAccessToken(),
}
const AuthLoginSlice = createSlice({
    name: 'AuthLogin',
    initialState,
    reducers: {
        logOut: (state, action: PayloadAction<string>) => {
            console.log(action);
            
            state.token = undefined
            state.AuthLogin = undefined
            localStorage.removeItem('ACCESSTOKEN')
        },
    },
    extraReducers(builder){
        builder
        .addCase(AuthLoginThunk.fulfilled,(state,{payload}) => {
            console.log(payload);
            localStorage.setItem('ACCESSTOKEN', payload.token)
           
            state.AuthLogin = payload
            
        })
    },
})
export const { actions: AuthLoginActions, reducer: AuthLoginReducer } =
AuthLoginSlice