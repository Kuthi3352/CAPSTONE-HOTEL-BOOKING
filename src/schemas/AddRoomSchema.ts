import { z } from "zod";

export const AddRoomSchema = z.object({
  id: z.string().default("0"),
  tenPhong: z.string().nonempty("Vui lòng nhập tên phòng"),
  khach: z.string().nonempty("Vui lòng nhập số khách"),
  phongNgu: z.number().default(0),
  giuong: z.number().default(0),
  phongTam: z.number().default(0),
  moTa: z.string().nonempty("Vui lòng nhập mô tả"),
  giaTien: z.string().nonempty("Vui lòng nhập giá tiền"),
  mayGiat: z.boolean().default(true),
  banLa: z.boolean().default(true),
  tivi: z.boolean().default(true),
  dieuHoa: z.boolean().default(true),
  wifi: z.boolean().default(true),
  bep: z.boolean().default(true),
  doXe: z.boolean().default(true),
  hoBoi: z.boolean().default(true),
  banUi: z.boolean().default(true),
  maViTri: z.string().nonempty("Vui lòng nhập mã vị trí"),
  hinhAnh: z.string().default("Qua kia mà nhập anh"),
});

export type AddRoomSchemaType = z.infer<typeof AddRoomSchema>;
