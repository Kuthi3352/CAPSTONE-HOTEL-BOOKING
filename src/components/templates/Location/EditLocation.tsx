import { Button, Input } from "components";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { useForm, SubmitHandler } from "react-hook-form";
import { PositionType } from "types/PositinonType";
import { useEffect } from "react";
import { UpdateLocationThunk } from "store/Position/thunks";

export const EditLocation = () => {
  const dispatch = useAppDispatch();
  const { EditLocation } = useSelector(
    (state: RootState) => state.PositionReducer
  );

  const { reset, register, handleSubmit } = useForm<PositionType>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<PositionType> = (value: PositionType) => {
    console.log(value);
    dispatch(UpdateLocationThunk({ path: EditLocation.id, payload: value }));
  };
  useEffect(() => {
    reset(EditLocation);
  }, [reset, EditLocation]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="modal fade"
      id="exampleModal1"
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
            <p className="font-bold text-orange-500 flex justify-start">ID</p>
            <Input id="id" name="id" register={register} />

            <p className="font-bold text-orange-500  flex justify-start">
              Tên Tỉnh Thành
            </p>
            <Input id="tinhThanh" name="tinhThanh" register={register} />
            <p className="font-bold text-orange-500  flex justify-start">
              Tên địa bàn
            </p>
            <Input id="tenViTri" name="tenViTri" register={register} />
            <p className="font-bold text-orange-500  flex justify-start">
              Tên địa điểm
            </p>
            <Input id="quocGia" name="quocGia" register={register} />
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
