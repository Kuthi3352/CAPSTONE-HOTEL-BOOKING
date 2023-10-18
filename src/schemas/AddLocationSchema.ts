import { z } from "zod";

export const AddLocationSchema = z.object({
  id: z.number().default(0),
  tenViTri: z.string().nonempty("Vui lòng nhập địa bàn"),
  tinhThanh: z.string().nonempty("Vui lòng nhập tỉnh thành"),
  quocGia: z.string().nonempty("Vui lòng địa điểm"),
  hinhAnh: z.string().nonempty("Vui lòng chọn ngày sinh"),
});

export type AddLocationSchemaType = z.infer<typeof AddLocationSchema>;
