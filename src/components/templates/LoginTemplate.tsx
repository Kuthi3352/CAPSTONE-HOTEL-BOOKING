import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "components";
import { LoginSchemas, LoginSchemasType } from "schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "store";
import { AuthLoginThunk } from "store/Auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleError } from "utils";

export const LoginTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemasType>({
    mode: "onChange",
    resolver: zodResolver(LoginSchemas),
  });
  const onSubmit: SubmitHandler<LoginSchemasType> = (value) => {
    dispatch(AuthLoginThunk(value))
      .unwrap()
      .then(() => {
        toast.success("Đăng nhập thành công!");
        navigate("/");
      })
      .catch((err) => {
        handleError(err);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-600 text-30 text-white">Đăng nhập</h2>
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
      <Button
        className="!w-full !h-[48px] !mt-20"
        htmlType="submit"
        type="primary"
        danger
      >
        Đăng nhập
      </Button>
    </form>
  );
};
