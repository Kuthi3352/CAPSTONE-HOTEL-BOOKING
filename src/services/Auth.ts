import { apiInstance } from 'constant'
import {  LoginSchemasType, RegisterSchemasType } from 'schemas'
import { AuthType } from 'types/AuthType'
const api = apiInstance({
    baseURL: import.meta.env.VITE_AUTH_API,
})
export const AuthServices =  {
    register: (data: RegisterSchemasType) => api.post('/signup', data),
    login: (data: LoginSchemasType) => api.post<ApiResponse<AuthType>>('signin', data)
}