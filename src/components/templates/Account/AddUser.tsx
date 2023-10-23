
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Input, Button } from "components";
import { AdminSchemas, AdminSchemasType } from "schemas";
import { ListUserServices } from "services";
import { handleError } from "utils";

export const AddUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AdminSchemasType>({
    mode: "onChange",
    resolver: zodResolver(AdminSchemas),
  });
  const onSubmit: SubmitHandler<AdminSchemasType> = async (valuee) => {
    console.log("valuee", valuee);


    try {
      await ListUserServices.Admin(valuee);
      toast.success("Đăng kí thành công");
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <AdminContainer>
      <h1 className="text-3xl text-center mb-20 font-bold">
        TẠO TÀI KHOẢN ADMIN
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="flex">
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
          <div className="ml-5">
            <Input
              className="mt-16"
              label="Ngày Sinh"
              id="birthday"
              name="birthday"
              error={errors?.birthday?.message}
              register={register}
            />
            <Input
              className="mt-16"
              label="role"
              id="role"
              name="role"
              error={errors?.role?.message}
              register={register}
            />

            {/* <div className="mt-16">
              <label>Chức vụ</label>
              <select
                className="p-10 mt-8 w-full text-black rounded-6  bg-[#d1d0d0]"
                id="role"
                name="role"
              >
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
            </div> */}
            <div className="mt-16">
              <label>Giới Tính</label>
              <select
                className="p-10 mt-8 w-full text-black rounded-6  bg-[#d1d0d0]"
                id="gender"
                name="gender"
                
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
          className="w-full !p-3 !bg-red-500 !text-white !mt-[25px] !rounded-10  !h-[48px] !font-bold"
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
  input,select {
    padding: 10px 270px 10px 10px !important;
    background-color: #a3a2a21b;
  }
`;
