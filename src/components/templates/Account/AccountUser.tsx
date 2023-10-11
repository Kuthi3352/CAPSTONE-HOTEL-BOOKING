import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "hooks";
import { AccountSchema, AccountSchemaType } from "schemas";
// import { useAppDispatch } from "store";
import { Button, Input } from "components";
import { useEffect } from "react";

export const AccountUser = () => {
  //   const dispatch = useAppDispatch();
  const { user } = useAuth();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountSchemaType>({
    mode: "onChange",
    resolver: zodResolver(AccountSchema),
  });
  const onSubmit: SubmitHandler<AccountSchemaType> = (value) => {
    console.log("value", value);
  };
  useEffect(() => {
    reset({
      ...user?.user,
    });
  }, [user, reset]);

  return (
    <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
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
          <option value="true">Nam</option>
          <option value="false">Nữ</option>
        </select>
      </div>

      <Button
        danger
        htmlType="submit"
        className="w-full !p-3 !bg-red-500 !text-white !mt-[25px] !rounded-10  !h-[48px] !font-bold"
      >
        Cập Nhật
      </Button>
    </form>
  );
};
