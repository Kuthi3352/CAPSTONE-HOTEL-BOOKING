import { z } from "zod";

export const DatPhongSchema = z.object({
  id: z.number().default(0),
  maPhong: z.string().nonempty("Vui lòng nhập mã phòng"),
  ngayDen: z.string().nonempty("Vui lòng nhập ngày đến"),
  ngayDi: z.string().nonempty("Vui lòng nhập ngày đi"),
  soLuongKhach: z.string().nonempty("Vui lòng nhập lượng khách"),
  maNguoiDung: z.string().nonempty("Vui lòng nhập mã người dùng "),
});

export type DatPhongSchemaType = z.infer<typeof DatPhongSchema>;
