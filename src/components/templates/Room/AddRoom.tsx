import { Button, Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { RoomListService } from "services";

import { toast } from "react-toastify";
import { handleError } from "utils";
import { useAppDispatch } from "store";
import { getRoomThunk } from "store/Room/thunk";
import { AddRoomSchema, AddRoomSchemaType } from "schemas";
import { zodResolver } from "@hookform/resolvers/zod";
export const AddRoom = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddRoomSchemaType>({
    mode: "onChange",
    resolver: zodResolver(AddRoomSchema),
  });
  const onSubmit: SubmitHandler<AddRoomSchemaType> = async (value) => {
    try {
      await RoomListService.AddRoom(value);
      toast.success("Thêm phòng thành công");
      dispatch(getRoomThunk());
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="AddForm">
      <h1 className="text-3xl text-center mb-3 font-bold ndA">Thêm Phòng</h1>
      <Input
        id="maViTri"
        name="maViTri"
        className="add-position-input mt-2"
        register={register}
        label="Mã vị trí"
        error={errors?.maViTri?.message}
      />
      <Input
        id="tenPhong"
        name="tenPhong"
        className="add-position-input"
        register={register}
        label="Tên phòng"
        error={errors?.tenPhong?.message}
      />
      <Input
        id="giaTien"
        mt-2
        name="giaTien"
        className="add-position-input mt-2"
        register={register}
        label="Giá tiền"
        error={errors?.giaTien?.message}
      />
      <Input
        id="moTa"
        name="moTa"
        className="add-position-input mt-2"
        register={register}
        label="Mô tả phòng"
        error={errors?.moTa?.message}
      />
      <Input
        id="khach"
        name="khach"
        className="add-position-input mt-2"
        register={register}
        label="Số lượng người"
        error={errors?.khach?.message}
      />
      <Input
        id="hinhAnh"
        name="hinhAnh"
        className="add-position-input mt-2 none"
        register={register}
        label="Hình ảnh"
        error={errors?.hinhAnh?.message}
      />

      <Button
        danger
        htmlType="submit"
        className="w-full !p-3 !bg-red-500 !text-white !mt-[25px] !rounded-10  !h-[48px] !font-bold !text-[18px]"
      >
        Thêm phòng
      </Button>
    </form>
  );
};
