import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "components";
import { LoginSchemas, LoginSchemasType } from "schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { RootState, useAppDispatch } from "store";
import { AuthLoginThunk } from "store/Auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleError } from "utils";
import { useSelector } from "react-redux";

export const LoginTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isFetchingLogin } = useSelector(
    (state: RootState) => state.AuthLogin
  );
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
      <h2 className="font-600 text-30 text-white text-center">Đăng nhập</h2>
      <p className="text-[16px] text-white">Email</p>
      <Input
        placeholder="abcxyz@gmail.com"
        id="email"
        name="email"
        error={errors?.email?.message}
        register={register}
      />
      <p className="text-[16px] text-white">Password</p>
      <Input
        placeholder="Nhập Mật Khẩu"
        id="password"
        name="password"
        type="password"
        error={errors?.password?.message}
        register={register}
      />
      <Button
        className="!w-full !h-[48px] !mt-20 !rounded-[6px]"
        htmlType="submit"
        type="primary"
        danger
        loading={isFetchingLogin}
      >
        Đăng nhập
      </Button>
    </form>
  );
};
