import { apiInstance } from "constant";
import { AddLocationSchemaType } from "schemas";
import { PositionType } from "types/PositinonType";

const api = apiInstance({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const PositionService = {
  getPosition: () => api.get<ApiResponse<PositionType[]>>("/vi-tri"),
  EditLocation: (path: number) =>
    api.get<ApiResponse<PositionType>>(`/vi-tri/${path}`),
  UpdateLocation: (path: number, payload: PositionType) => {
    return api.put<ApiResponse<PositionType>>(`/vi-tri/${path}`, payload);
  },
  DeleteLocation: (path: number) =>
    api.delete<ApiResponse<PositionType>>(`/vi-tri/${path}`),
  AddLocation: (payload: AddLocationSchemaType) => {
    return api.post<ApiResponse<AddLocationSchemaType>>("/vi-tri", payload);
  },
};
