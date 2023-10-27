import { BinhLuanType } from "types";

export const commentValue = (value: BinhLuanType) => {
  const commentValue: BinhLuanType = {
    id: value.id,
    maPhong: Number(value.maPhong),
    maNguoiBinhLuan: Number(value.maNguoiBinhLuan),
    ngayBinhLuan: value.ngayBinhLuan,
    noiDung: value.noiDung,
    saoBinhLuan: Number(value.saoBinhLuan),
  };
  return commentValue;
};
