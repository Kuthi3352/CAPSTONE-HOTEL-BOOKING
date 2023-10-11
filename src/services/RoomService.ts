import { apiInstance } from 'constant'
import { RoomPosition, RoomType } from 'types/RoomType'

const api = apiInstance({
    baseURL:"https://airbnbnew.cybersoft.edu.vn/api",
})
export const RoomService =  {
    getRoom: () => api.get<ApiResponse<RoomType[]>>('/phong-thue'),
    getPosition: ()=>api.get<ApiResponse<RoomPosition[]>>('/vi-tri')
}