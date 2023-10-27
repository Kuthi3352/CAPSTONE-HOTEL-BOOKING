import { z } from "zod";

export const BookingSchemas = z.object({
  id: z.string().default("0"),
  maPhong: z.string(),
  ngayDen: z.string().nonempty("Vui lòng nhập ngày đến"),
  ngayDi: z.string().nonempty("Vui lòng nhập ngày đi"),
  soLuongKhach: z.string(),
  maNguoiDung: z.string(),
});

export type BookingSchemasType = z.infer<typeof BookingSchemas>;
