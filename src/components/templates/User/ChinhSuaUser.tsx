import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Button, Input } from "components";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { useEffect } from "react";
import { ListUserType } from "types/ListUserType";
import { ListUserThunk, UpdateUserThunk } from "store/DanhSachThanhVien";
import { submitAdminForm } from "utils/submitAdminForm";
import { toast } from "react-toastify";
import { handleError } from "utils";
export const ChinhSuaUser = () => {
  const dispatch = useAppDispatch();
  const [gender, setGender] = useState<string>();
  const [role, setRole] = useState<string>();
  const { EditUser } = useSelector((state: RootState) => state.ListReducer);
  const { reset, register, handleSubmit } = useForm<ListUserType>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ListUserType> = async (value) => {
    const newForm = submitAdminForm(value, role, gender);
    dispatch(UpdateUserThunk({ path: EditUser?.id, payload: newForm }));
    dispatch(ListUserThunk())
      .unwrap()
      .then(() => {
        toast.success("Chỉnh sửa thành công");
      })
      .catch((error) => {
        handleError(error);
      });
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
            <Input id="id" name="id" register={register} disabled />

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
            <select
              className="p-10 mt-8 w-full text-black rounded-6 bg-[#d1d0d0]"
              onChange={(event) => {
                setRole(event.target.value);
              }}
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
            <p className="font-bold text-orange-500  flex justify-start none">
              Giới tính
            </p>
            <select
              className="p-10 mt-8 w-full text-black rounded-6 bg-[#d1d0d0] none"
              onChange={(event) => {
                setGender(event.target.value);
              }}
            >
              <option value="true">Nam</option>
              <option value="false">Nữ</option>
            </select>
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
              data-bs-dismiss="modal"
            >
              Cập Nhật
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
