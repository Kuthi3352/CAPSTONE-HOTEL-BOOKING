import { apiInstance } from "constant";
import { RoomPosition } from "types/RoomType";

const api = apiInstance({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const RoomService = {
  getPosition: () => api.get<ApiResponse<RoomPosition[]>>("/vi-tri"),
};
