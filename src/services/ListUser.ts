import { apiInstance } from "constant";
import { AccountSchemaType, AdminSchemasType } from "schemas";
import { ListUserType } from "types/ListUserType";

const api = apiInstance({
  baseURL: import.meta.env.VITE_LIST_USER_API,
});
export const ListUserServices = {
  listUser: () => api.get<ApiResponse<ListUserType[]>>(""),
  EditUser: (query: string) =>
    api.get<ApiResponse<AccountSchemaType>>(`/${query}`),
  DeleteUser: (query: string) => {
    return api.delete<ApiResponse<ListUserType>>(`?id=${query}`);
  },
  UpdateUser: (path: string, data: AccountSchemaType) => {
    return api.put<ApiResponse<AccountSchemaType>>(`/${path}`, data);
  },
  Admin: (data: AdminSchemasType) => api.post("", data),
};
