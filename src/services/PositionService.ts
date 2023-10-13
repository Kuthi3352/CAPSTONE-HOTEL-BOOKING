import { apiInstance } from "constant";
import { PositionType } from "types/PositinonType";

const api = apiInstance({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const PositionService = {
  getPosition: () => api.get<ApiResponse<PositionType[]>>("/vi-tri"),
};
