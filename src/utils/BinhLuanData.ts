import { BinhLuanType } from "types";

export const commentValue = (value: BinhLuanType, newDanhGia:number) => {
  const date = new Date()
  const commentValue: BinhLuanType = {
    id: value.id,
    maPhong: Number(value.maPhong),
    maNguoiBinhLuan: Number(value.maNguoiBinhLuan),
    ngayBinhLuan: date.toDateString(),
    noiDung: value.noiDung,
    saoBinhLuan: newDanhGia,
    
  };
  return commentValue;
};
