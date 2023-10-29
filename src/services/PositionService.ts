import { apiInstance } from "constant";
import { AddLocationSchemaType } from "schemas";
import { PositionType } from "types/PositinonType";

const api = apiInstance({
  baseURL: import.meta.env.VITE_POSITION_API,
});

export const PositionService = {
  getPosition: () => api.get<ApiResponse<PositionType[]>>(""),
  EditLocation: (path: string) =>
    api.get<ApiResponse<PositionType>>(`/${path}`),
  UpdateLocation: (path: string, payload: PositionType) => {
    return api.put<ApiResponse<PositionType>>(`/${path}`, payload);
  },
  DeleteLocation: (path: string) =>
    api.delete<ApiResponse<PositionType>>(`/${path}`),
  AddLocation: (payload: AddLocationSchemaType) => {
    return api.post<ApiResponse<AddLocationSchemaType>>("", payload);
  },
  UploadLocation: (query: string, formData: FormData) =>
    api.post<ApiResponse<PositionType>>(
      `/upload-hinh-vitri?maViTri=${query}`,
      formData
    ),
};
