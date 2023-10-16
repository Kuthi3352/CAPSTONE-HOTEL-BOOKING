import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginSchemasType } from 'schemas'
import { AuthServices } from 'services'

export const AuthLoginThunk = createAsyncThunk(
    'Authlogin/login',
    async(payload:LoginSchemasType, {rejectWithValue}) => {
        try{
            const data = await AuthServices.login(payload)
            return data.data.content
        }catch(err){
            return rejectWithValue(err)
        }
    }
)
