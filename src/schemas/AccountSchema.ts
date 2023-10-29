import { z } from "zod";
export const AccountSchema = z.object({
  //   id: z.string().nonempty("Vui lòng không bỏ trống"),
  id: z.string().default("0"),
  name: z.string().nonempty("Vui lòng nhập tài khoản"),
  email: z
    .string()
    .nonempty("Vui lòng nhập email")
    .email("Vui lòng nhập đúng email"),
  password: z.string().nonempty("Vui lòng nhập mật khẩu").min(8),
  phone: z.string().nonempty("Vui lòng nhập số điện thoại"),
  birthday: z.string().nonempty("Vui lòng chọn ngày sinh"),
});
export type AccountSchemaType = z.infer<typeof AccountSchema>;
