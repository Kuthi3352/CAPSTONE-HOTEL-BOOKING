import { apiInstance } from "constant";
import {  AdminSchemasType } from "schemas";
import { ListUserType } from "types/ListUserType";

const api = apiInstance({
  baseURL: import.meta.env.VITE_LIST_USER_API,
});
export const ListUserServices = {
  listUser: () => api.get<ApiResponse<ListUserType[]>>("/users"),
  EditUser: (query: string) =>
    api.get<ApiResponse<ListUserType>>(`/users/${query}`),
  DeleteUser: (query: string) => {
    return api.delete<ApiResponse<ListUserType>>(`/users?id=${query}`);
  },
  UpdateUser: (path: string, data: ListUserType) => {
    return api.put<ApiResponse<ListUserType>>(`/users/${path}`, data);
  },
  Admin: (data: AdminSchemasType) => api.post("/users", data),
};
