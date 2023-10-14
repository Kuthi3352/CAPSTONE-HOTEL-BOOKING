import { apiInstance } from "constant";
import { RoomType } from "types/RoomType";

const api = apiInstance({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api/phong-thue",
});
export const RoomListService = {
  getRoom: () => api.get<ApiResponse<RoomType[]>>(""),
  getRoomDetail: (path: string) => api.get<ApiResponse<RoomType>>(`/${path}`),
  getRoomListByPosition: (path: string) =>
    api.get<ApiResponse<RoomType[]>>(`/lay-phong-theo-vi-tri${path}`),
};
