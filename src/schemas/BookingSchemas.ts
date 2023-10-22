import { z } from "zod";

export const BookingSchemas = z.object({
  id: z.string().default('0'),
  maPhong: z.string(),
  ngayDen: z.string().nonempty(),
  ngayDi: z.string().nonempty(),
  soLuongKhach: z.string(),
  maNguoiDung: z.string(),
});

export type BookingSchemasType = z.infer<typeof BookingSchemas>;
