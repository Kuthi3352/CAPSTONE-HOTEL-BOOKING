import { AdminSchemasType } from "schemas";

export const submitAdminForm = (
  formAdmin: AdminSchemasType,
  role: string,
  gender: string
) => {
  return {
    id: formAdmin.id,
    name: formAdmin.name,
    email: formAdmin.email,
    password: formAdmin.password,
    phone: formAdmin.phone,
    birthday: formAdmin.birthday,
    role,
    gender,
  };
};
