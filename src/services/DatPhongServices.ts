import { apiInstance } from "constant";
import { DatPhongSchemaType } from "schemas";
import { DatPhongType } from "types/DatPhongType";
const api = apiInstance({
  baseURL: import.meta.env.VITE_DAT_PHONG_API,
});
export const DatPhongServices = {
  getDatPhongList: () => api.get<ApiResponse<DatPhongType[]>>(""),
  EditDatPhong: (path: string) =>
    api.get<ApiResponse<DatPhongType>>(`/${path}`),
  UpdateDatPhong: (path: string, payload: DatPhongType) => {
    return api.put<ApiResponse<DatPhongType>>(`${path}`, payload);
  },
  DeleteDatPhong: (path: string) =>
    api.delete<ApiResponse<DatPhongType>>(`${path}`),
  AddDatPhong: (payload: DatPhongSchemaType) => {
    return api.post<ApiResponse<DatPhongSchemaType>>(``, payload);
  },
};
