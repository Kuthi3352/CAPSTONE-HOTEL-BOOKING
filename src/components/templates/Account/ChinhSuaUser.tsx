// import { AccountSchema, AccountSchemaType } from "schemas";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button, Input } from "components";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { useEffect } from "react";
import { ListUserType } from "types/ListUserType";
import { UpdateUserThunk } from "store/DanhSachThanhVien";
export const ChinhSuaUser = () => {
  const dispatch = useAppDispatch();
  const { EditUser } = useSelector((state: RootState) => state.ListReducer);
  const {
    reset,
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<ListUserType>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<ListUserType> = (value: ListUserType) => {
    dispatch(UpdateUserThunk({ path: EditUser?.id, payload: value }));
  };
  useEffect(() => {
    reset(EditUser);
  }, [reset, EditUser]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header block">
            <h1 className="modal-title !text-center" id="exampleModalLabel">
              Thông tin khách hàng
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            <p className="font-bold text-orange-500 flex justify-start">
              Mã khách hàng
            </p>
            <Input id="id" name="id" register={register} />

            <p className="font-bold text-orange-500  flex justify-start">
              Tên Người Dùng
            </p>
            <Input id="name" name="name" register={register} />
            <p className="font-bold text-orange-500  flex justify-start">
              Email
            </p>
            <Input id="email" name="email" register={register} />
            <p className="font-bold text-orange-500  flex justify-start">
              Role
            </p>
            <Input id="role" name="role" register={register} />
          </div>
          <div className="modal-footer">
            <Button
              className="!bg-fuchsia-500 !text-white !font-500"
              data-bs-dismiss="modal"
            >
              Đóng
            </Button>
            <Button
              className="!bg-red-500 !text-white !font-500"
              htmlType="submit"
            >
              Cập Nhật
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
