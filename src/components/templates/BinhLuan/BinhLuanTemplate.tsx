import { Button, Input } from "components";
import { useAuth } from "hooks";
// import { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "store";
import { BinhLuanThunk } from "store/BinhLuan";
import { BinhLuanType } from "types";

export const BinhLuanTemplate = () => {
  const { token } = useAuth();
  console.log(token);

  const dispatch = useAppDispatch();
  const { handleSubmit, register } = useForm<BinhLuanType>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<BinhLuanType> = (value: BinhLuanType) => {
    dispatch(BinhLuanThunk(value));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-600 text-30 text-white">Đăng nhập</h2>
      <Input
        className="mt-16"
        label="mã phòng"
        id="maPhong"
        name="maPhong"
        register={register}
      />
      <Input
        className="mt-16"
        label="mã người bình luận"
        id="maNguoiBinhLuan"
        name="maNguoiBinhLuan"
        register={register}
      />
      <Input
        className="mt-16"
        label="mã người bình luận"
        id="maNguoiBinhLuan"
        name="maNguoiBinhLuan"
        register={register}
      />
      <Input
        className="mt-16"
        label="ngày bình luận"
        id="ngayBinhLuan"
        name="ngayBinhLuan"
        register={register}
      />
      <Input
        className="mt-16"
        label="nội dung "
        id="noiDung"
        name="noiDung"
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
