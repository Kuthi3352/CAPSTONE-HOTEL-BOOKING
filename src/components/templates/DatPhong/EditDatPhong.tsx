import { Button, Input } from "components";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { RoomType } from "types/RoomType";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

import { toast } from "react-toastify";
import { DatPhongType } from "types/DatPhongType";
import { UpdateDatPhongThunk } from "store/DatPhong";

export const EditDatPhong = () => {
  const dispatch = useAppDispatch();
  const { editDatPhong } = useSelector(
    (state: RootState) => state.DatPhongReducer
  );
  const { reset, register, handleSubmit } = useForm<RoomType>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<DatPhongType> = (value: DatPhongType) => {
    dispatch(UpdateDatPhongThunk({ path: editDatPhong.id, payload: value }));
    toast.success("Cập nhật thành công");
  };
  useEffect(() => {
    reset(editDatPhong);
  }, [reset, editDatPhong]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="modal fade"
      id="exampleModal5"
      tabIndex={-1}
      aria-labelledby="exampleModalLabe2"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header block">
            <h1 className="modal-title !text-center" id="exampleModalLabel">
              Thông tin đặt phòng
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            <p className="font-bold text-orange-500 flex justify-start">ID</p>
            <Input id="id" name="id" register={register} />

            <p className="font-bold text-orange-500  flex justify-start">
              Mã phòng
            </p>
            <Input id="maPhong" name="maPhong" register={register} />
            <p className="font-bold text-orange-500  flex justify-start">
              Mã người dùng
            </p>
            <Input id="maNguoiDung" name="maNguoiDung" register={register} />
            <p className="font-bold text-orange-500  flex justify-start">
              Ngày đến
            </p>
            <Input id="ngayDen" name="ngayDen" register={register} />
            <p className="font-bold text-orange-500  flex justify-start">
              Ngày đi
            </p>
            <Input id="ngayDi" name="ngayDi" register={register} />
            <p className="font-bold text-orange-500  flex justify-start">
              Ngày đến
            </p>
            <Input id="ngayDen" name="ngayDen" register={register} />
            <p className="font-bold text-orange-500  flex justify-start">
              Số lượng khách
            </p>
            <Input id="soLuongKhach" name="soLuongKhach" register={register} />
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
