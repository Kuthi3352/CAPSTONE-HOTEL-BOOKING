import { z } from 'zod'

export const LoginSchemas = z.object({
    email: z.string().nonempty('Vui lòng nhập email').email('Vui lòng nhập đúng email'),
    password: z.string().nonempty('Vui lòng nhập mật khẩu'),
   

})

export type LoginSchemasType = z.infer<typeof LoginSchemas>