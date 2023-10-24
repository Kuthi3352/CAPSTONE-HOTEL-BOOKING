import { apiInstance } from "constant";
import { BinhLuanType, getBinhLuanType } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_BINH_LUAN_API,
});

export const BinhLuanServices = {
  danhGia: () => api.get<ApiResponse<BinhLuanType[]>>(""),
  binhLuan: (data: BinhLuanType) =>
    api.post<ApiResponse<BinhLuanType>>("", data),
  DeleteBinhLuan: (path: string) =>
    api.delete<ApiResponse<BinhLuanType>>(`/${path}`),
  getBinhLuan: (path: string) =>
    api.get<ApiResponse<getBinhLuanType[]>>(`lay-binh-luan-theo-phong/${path}`),
};
