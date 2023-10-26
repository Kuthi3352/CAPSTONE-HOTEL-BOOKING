import { Button, Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { handleError } from "utils";
import { useAppDispatch } from "store";

import { DatPhongSchema, DatPhongSchemaType } from "schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatPhongServices } from "services/DatPhongServices";
import { getDatPhongThunk } from "store/DatPhong";
export const AddDatPhong = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DatPhongSchemaType>({
    mode: "onChange",
    resolver: zodResolver(DatPhongSchema),
  });
  const onSubmit: SubmitHandler<DatPhongSchemaType> = async (value) => {
    console.log(value);

    try {
      await DatPhongServices.AddDatPhong(value);
      toast.success("Thêm thành công");
      dispatch(getDatPhongThunk());
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="AddForm">
      <h1 className="text-3xl text-center mb-3 font-bold ndA">
        Thêm danh sách phòng
      </h1>

      <Input
        id="maPhong"
        name="maPhong"
        className="add-position-input"
        register={register}
        label="Mã phòng"
        error={errors?.maPhong?.message}
      />
      <Input
        id="maNguoiDung"
        name="maNguoiDung"
        className="add-position-input mt-2"
        register={register}
        label="Mã người dùng"
        error={errors?.maNguoiDung?.message}
      />
      <Input
        id="ngayDen"
        name="ngayDen"
        className="add-position-input mt-2"
        register={register}
        label="Ngày đến"
        error={errors?.ngayDen?.message}
      />
      <Input
        id="ngayDi"
        name="ngayDi"
        className="add-position-input mt-2"
        register={register}
        label="Ngày đi"
        error={errors?.ngayDi?.message}
      />
      <Input
        id="soLuongKhach"
        name="soLuongKhach"
        className="add-position-input mt-2"
        register={register}
        label="Số lượng khách"
        error={errors?.soLuongKhach?.message}
      />

      <Button
        danger
        htmlType="submit"
        className="w-full !p-3 !bg-red-500 !text-white !mt-[25px] !rounded-10  !h-[48px] !font-bold !text-[18px]"
      >
        Thêm
      </Button>
    </form>
  );
};
