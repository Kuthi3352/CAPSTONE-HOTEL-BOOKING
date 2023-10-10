import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "components";

import { PATH } from "constant";
import { SubmitHandler, useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterSchemas, RegisterSchemasType } from "schemas";

import { AuthServices } from "services";
import { handleError } from "utils";

export const RegisterTemplate = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchemasType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchemas),
  });

  const onSubmit: SubmitHandler<RegisterSchemasType> = async (values) => {
    try {
      console.log({ values });
      await AuthServices.register(values);
      toast.success("Đăng kí thành công");
      navigate(PATH.login);
    } catch (err) {
      console.log(err);
      handleError(err);
    }
  };

  return (
    <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-600 text-30">Đăng ký</h2>
      <Input
        className="mt-16"
        label="Tên người dùng"
        placeholder="Tên người dùng"
        id="name"
        name="name"
        error={errors?.name?.message}
        register={register}
      />
      <Input
        className="mt-16"
        label="Email"
        placeholder="abcxyz@gmail.com"
        id="email"
        name="email"
        error={errors?.email?.message}
        register={register}
      />
      <Input
        className="mt-16"
        label="Mật Khẩu"
        placeholder="Nhập Mật Khẩu"
        id="password"
        name="password"
        type="password"
        error={errors?.password?.message}
        register={register}
      />
      <Input
        className="mt-16"
        label="Số Điện Thoại"
        placeholder="Nhập Số Điện Thoại"
        id="phone"
        name="phone"
        error={errors?.phone?.message}
        register={register}
      />
      <Input
        className="mt-16"
        label="Ngày Sinh"
        id="birthday"
        name="birthday"
        type="date"
        error={errors?.birthday?.message}
        register={register}
      />

      <div className="mt-16">
        <label>Giới Tính</label>
        <select
          className="p-10 mt-8 w-full text-white rounded-6 bg-[#333]"
          id="gender"
          name="gender"
        >
          <option>Nam</option>
          <option>Nữ</option>
        </select>
      </div>

      <Button
        danger
        htmlType="submit"
        className="w-full !p-3 !bg-red-500 !text-white !mt-[25px] !rounded-10  !h-[48px] !font-bold"
      >
        Đăng Ký
      </Button>
    </form>
  );
};
