import { BookingSchemasType } from "schemas/BookingSchemas";
import { BookingRoom } from "types/RoomType";

export const newValue = (value: BookingSchemasType) => {
  const newValue: BookingRoom = {
    id: Number(value.id),
    maPhong: Number(value.maPhong),
    ngayDen: value.ngayDen,
    ngayDi: value.ngayDi,
    soLuongKhach: Number(value.soLuongKhach),
    maNguoiDung: Number(value.maNguoiDung),
  };
  return newValue
};
