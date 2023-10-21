import { z } from "zod";

export const BookingSchemas = z.object({
  id: z.string().default('0'),
  maPhong: z.string(),
  ngayDen: z.string(),
  ngayDi: z.string(),
  soLuongKhach: z.string(),
  maNguoiDung: z.string(),
});

export type BookingSchemasType = z.infer<typeof BookingSchemas>;
