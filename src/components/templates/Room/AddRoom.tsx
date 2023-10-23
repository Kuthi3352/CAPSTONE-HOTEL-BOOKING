import { Button, Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { RoomListService } from "services";
import { RoomType } from "types/RoomType";
import { toast } from "react-toastify";
import { handleError } from "utils";
import { useAppDispatch } from "store";
import { getRoomThunk } from "store/Room/thunk";
export const AddRoom = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm<RoomType>({
    mode: "onChange",
    // resolver: zodResolver(AddLocationSchema),
  });
  const onSubmit: SubmitHandler<RoomType> = async (value) => {
    console.log(value);

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
      <h1 className="text-3xl text-center mb-3 font-bold">
        Thêm Phòng
      </h1>
      <Input
        id="tenPhong"
        name="tenPhong"
        className="add-position-input"
        register={register}
        label="Tên phòng"
        // error={errors?.tinhThanh?.message}
      />
      <Input
        id="giaTien" mt-2
        name="giaTien"
        className="add-position-input mt-2"
        register={register}
        label="Giá tiền"
        // error={errors?.tenViTri?.message}
      />
      <Input
        id="khach"
        name="khach"
        className="add-position-input mt-2"
        register={register}
        label="Số lượng người"
        // error={errors?.quocGia?.message}
      />
      <Button
        danger
        htmlType="submit"
        className="w-full !p-3 !bg-red-500 !text-white !mt-[25px] !rounded-10  !h-[48px] !font-bold"
      >
        Thêm địa điểm
      </Button>
    </form>
  );
};
