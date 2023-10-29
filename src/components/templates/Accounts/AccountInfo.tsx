import { AccountSchemaType } from "schemas";
import { Button, Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { UpdateUserThunk } from "store/DanhSachThanhVien";

export const AccountInfo = () => {
  const dispatch = useAppDispatch();

  const { EditUser } = useSelector((state: RootState) => state.ListReducer);
  const { reset, handleSubmit, register } = useForm<AccountSchemaType>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<AccountSchemaType> = async (
    value: AccountSchemaType
  ) => {
    dispatch(UpdateUserThunk({ path: EditUser?.id, payload: value }));
    toast.success("Cập nhật thành công");
  };
  useEffect(() => {
    reset(EditUser);
  }, [reset, EditUser]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
      <div className="flex smM:block ">
        <div>
          <p className="account__input">Tên người dùng</p>
          <Input id="name" name="name" register={register} />
          <p className="account__input">Email</p>
          <Input id="email" name="email" register={register} />
          <p className="account__input">Số Điện Thoại</p>
          <Input id="phone" name="phone" register={register} />
        </div>
        <div className="ml-5 smM:!ml-0">
          <p className="account__input">Ngày Sinh</p>
          <Input id="birthday" name="birthday" register={register} />
          <div>
            <p className="account__input">Giới Tính</p>

            <select
              className="p-10 mt-8 w-full text-black rounded-6  bg-[#d1d0d0]"
              id="gender"
              name="gender"
            >
              <option value="true">Nam</option>
              <option value="false">Nữ</option>
            </select>
          </div>
          <div>
            <p className="account__input">Quyền hạn</p>

            <select
              className="p-10 mt-8 w-full text-black rounded-6  bg-[#d1d0d0]"
              id="role"
              name="role"
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
        </div>
      </div>

      <Button
        danger
        htmlType="submit"
        className="w-full !p-3 !bg-red-500 !text-white !mt-[25px] !rounded-10  !h-[48px] !font-bold !text-[18px]"
      >
        Cập nhật
      </Button>
    </form>
  );
};
