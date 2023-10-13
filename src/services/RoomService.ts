import { apiInstance } from "constant";
import { RoomPosition, RoomType } from "types/RoomType";

const api = apiInstance({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});
const api2 = apiInstance({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api/phong-thue",
});
export const RoomService = {
  getPosition: () => api.get<ApiResponse<RoomPosition[]>>("/vi-tri"),

  getRoom: () => api2.get<ApiResponse<RoomType[]>>(""),
  getRoomDetail: (path: string) => api2.get<ApiResponse<RoomType>>(`/${path}`),
  getRoomListByPosition: (path: string) => {
    api2.get<ApiResponse<RoomType[]>>(`/lay-phong-theo-vi-tri?maViTri=${path}`);
  },
};
