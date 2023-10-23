import { z } from "zod";

export const AdminSchemas = z.object({
  id: z.number().default(0),
  name: z.string().nonempty("Vui lòng nhập tài khoản"),
  email: z
    .string()
    .nonempty("Vui lòng nhập email")
    .email("Vui lòng nhập đúng email"),
  password: z.string().nonempty("Vui lòng nhập mật khẩu"),
  phone: z.string().nonempty("Vui lòng nhập số điện thoại"),
  birthday: z.string().nonempty("Vui lòng chọn ngày sinh"),
  gender: z.enum(["true", "false"]),
  role: z.string().nonempty("Vui lòng viết chữ hoa"),
});

export type AdminSchemasType = z.infer<typeof AdminSchemas>;
