import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Input, Button } from "components";
import { AdminSchemas, AdminSchemasType } from "schemas";
import { ListUserServices } from "services";
import { handleError } from "utils";
import { submitAdminForm } from "utils/submitAdminForm";
import { useState } from "react";

export const AddUser = () => {
  const [gender, setGender] = useState<string>();
  const [role, setRole] = useState<string>();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AdminSchemasType>({
    mode: "onChange",
    resolver: zodResolver(AdminSchemas),
  });
  const onSubmit: SubmitHandler<AdminSchemasType> = async (value) => {
    const newFormAdmin = submitAdminForm(value, role, gender);
    try {
      await ListUserServices.Admin(newFormAdmin);
      toast.success("Đăng kí thành công");
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <AdminContainer>
      <h1 className="text-3xl text-center mb-20 font-bold ndA">
        TẠO TÀI KHOẢN ADMIN
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="flex userA">
          <div>
            <Input
              className="mt-16"
              label="Tên người dùng"
              id="name"
              name="name"
              error={errors?.name?.message}
              register={register}
            />
            <Input
              className="mt-16"
              label="Email"
              id="email"
              name="email"
              error={errors?.email?.message}
              register={register}
            />
            <Input
              className="mt-16"
              label="Mật Khẩu"
              id="password"
              name="password"
              type="password"
              error={errors?.password?.message}
              register={register}
            />
            <Input
              className="mt-16"
              label="Số Điện Thoại"
              id="phone"
              name="phone"
              error={errors?.phone?.message}
              register={register}
            />
          </div>
          <div className="ml-5 smM:!ml-0">
            <Input
              className="mt-16"
              label="Ngày Sinh"
              id="birthday"
              name="birthday"
              error={errors?.birthday?.message}
              register={register}
            />
            <div className="mt-16">
              <p> Chức vụ</p>
              <select
                name="role"
                className="w-full"
                onChange={(event) => {
                  setRole(event.target.value);
                }}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="mt-16">
              <p>Giới tính</p>
              <select
                className="w-full"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              >
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
              </select>
            </div>
          </div>
        </div>

        <Button
          danger
          htmlType="submit"
          className="w-full !p-3 !bg-red-500 !text-white !mt-[25px] !rounded-10  !h-[48px] !font-bold !text-[18px]"
        >
          Đăng Ký
        </Button>
      </form>
    </AdminContainer>
  );
};
const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  input,
  select {
    padding: 10px 270px 10px 10px !important;
    background-color: #a3a2a21b;
  }
  @media (max-width: 769px) {
    input,
    select {
      padding: 10px 110px 10px 10px !important;
    }
  }
  @media (max-width: 641px) {
    .userA {
      display: block !important;
    }
    input,
    select {
      padding: 10px 10px 10px 10px !important;
    }
  }
`;
