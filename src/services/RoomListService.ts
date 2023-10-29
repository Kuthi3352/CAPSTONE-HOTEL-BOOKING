import { apiInstance } from "constant";
import { RoomType } from "types/RoomType";
import { BookingRoom, RoomPosition } from "types/RoomType";
const api = apiInstance({
  baseURL: import.meta.env.VITE_ROOM_API,
});
export const RoomListService = {
  getPosition: () => api.get<ApiResponse<RoomPosition[]>>("/vi-tri"),
  Booking: (data: BookingRoom) =>
    api.post<ApiResponse<BookingRoom>>("/dat-phong", data),
  getRoom: () => api.get<ApiResponse<RoomType[]>>("/phong-thue"),
  getRoomDetail: (path: string) =>
    api.get<ApiResponse<RoomType>>(`/phong-thue/${path}`),
  getRoomListByPosition: (path: string) =>
    api.get<ApiResponse<RoomType[]>>(
      `/phong-thue/lay-phong-theo-vi-tri${path}`
    ),
  EditRoom: (path: string) =>
    api.get<ApiResponse<RoomType>>(`/phong-thue/${path}`),
  UpdateRoom: (path: string, payload: RoomType) => {
    return api.put<ApiResponse<RoomType>>(`/phong-thue/${path}`, payload);
  },
  DeleteRoom: (path: string) =>
    api.delete<ApiResponse<RoomType>>(`/phong-thue/${path}`),
  AddRoom: (payload: RoomType) => {
    return api.post<ApiResponse<RoomType>>("/phong-thue", payload);
  },
  UploadRoom: (query: string, formData: FormData) =>
    api.post<ApiResponse<RoomType>>(
      `/phong-thue/upload-hinh-phong?maPhong=${query}`,
      formData
    ),
  BookingHistory: (path: string) =>
    api.get<ApiResponse<BookingRoom[]>>(
      `/dat-phong/lay-theo-nguoi-dung/${path}`
    ),
};
