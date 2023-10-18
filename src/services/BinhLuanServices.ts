import { apiInstance } from "constant";
import { BinhLuanType } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_BINH_LUAN_API,
});

export const BinhLuanServices = {
  danhGia: () => api.get<ApiResponse<BinhLuanType[]>>(""),
  binhLuan: (data: BinhLuanType) => api.post<ApiResponse<BinhLuanType>>("", data),
};
