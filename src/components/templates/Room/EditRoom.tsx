import { Button, Input } from "components";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { RoomType } from "types/RoomType";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { UpdateRoomThunk } from "store/Room/thunk";

export const EditRoom = () => {
  const dispatch = useAppDispatch();
  const { EditRoom } = useSelector((state: RootState) => state.RoomReducer);
  const { reset, register, handleSubmit } = useForm<RoomType>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<RoomType> = (value: RoomType) => {
    console.log(value);
    dispatch(UpdateRoomThunk({ path: EditRoom.id, payload: value }));
  };
  useEffect(() => {
    reset(EditRoom);
  }, [reset, EditRoom]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="modal fade"
      id="exampleModal2"
      tabIndex={-1}
      aria-labelledby="exampleModalLabe2"
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
              Tên Phòng
            </p>
            <Input id="tenPhong" name="tenPhong" register={register} />
            <p className="font-bold text-orange-500  flex justify-start">Giá</p>
            <Input id="giaTien" name="giaTien" register={register} />
            <p className="font-bold text-orange-500  flex justify-start">
              Số người tối đa
            </p>
            <Input id="khach" name="khach" register={register} />
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
