import { Button, Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { RoomListService } from "services";
import { RoomType } from "types/RoomType";
import { toast } from "react-toastify";
import { handleError } from "utils";
export const AddRoom = () => {
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
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="AddLocation">
      <h2 className="flex justify-center text-red-600 text-30 font-500">
        Thêm Phòng
      </h2>
      <p className="font-bold text-orange-500  flex justify-start">Tên Phòng</p>
      <Input
        id="tenPhong"
        name="tenPhong"
        register={register}
        // error={errors?.tinhThanh?.message}
      />
      <p className="font-bold text-orange-500  flex justify-start">Giá</p>
      <Input
        id="giaTien"
        name="giaTien"
        register={register}
        // error={errors?.tenViTri?.message}
      />
      <p className="font-bold text-orange-500  flex justify-start">Số người</p>
      <Input
        id="khach"
        name="khach"
        register={register}
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
