import { apiInstance } from "constant";
import { AdminSchemasType } from "schemas";
import { ListUserType } from "types/ListUserType";

const api = apiInstance({
  baseURL: import.meta.env.VITE_LIST_USER_API,
});
export const ListUserServices = {
  listUser: () => api.get<ApiResponse<ListUserType[]>>(""),
  EditUser: (query: string) => api.get<ApiResponse<ListUserType>>(`/${query}`),
  DeleteUser: (query: string) => {
    return api.delete<ApiResponse<ListUserType>>(`?id=${query}`);
  },
  UpdateUser: (path: string, data: ListUserType) => {
    return api.put<ApiResponse<ListUserType>>(`/${path}`, data);
  },
  Admin: (data: AdminSchemasType) => api.post("", data),
  UploadUser: (data: FormData) =>
    api.post<ApiResponse<ListUserType>>("/upload-avatar", data),
};
