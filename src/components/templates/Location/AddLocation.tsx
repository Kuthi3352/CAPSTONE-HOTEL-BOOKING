import { Button, Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { PositionService } from "services";

import { toast } from "react-toastify";
import { handleError } from "utils";
import { AddLocationSchemaType } from "schemas";
import { getPostionListThunk } from "store/Position/thunks";
import { useAppDispatch } from "store";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { PositionType } from "types/PositinonType";
export const AddLocation = () => {
  const dispatch = useAppDispatch();
 
  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm<AddLocationSchemaType>({
    mode: "onChange",
    // resolver: zodResolver(AddLocationSchema),
  });
  const onSubmit: SubmitHandler<AddLocationSchemaType> = async (value) => {
    console.log(value);

    try {
      await PositionService.AddLocation(value);
      toast.success("Thêm địa điểm thành công");
      dispatch(getPostionListThunk());
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="AddLocation">
      <h2 className="flex justify-center text-red-600 text-30 font-500">
        Thêm địa điểm
      </h2>
      <p className="font-bold text-orange-500  flex justify-start">
        Tên Tỉnh Thành
      </p>
      <Input
        id="tinhThanh"
        name="tinhThanh"
        register={register}
        // error={errors?.tinhThanh?.message}
      />
      <p className="font-bold text-orange-500  flex justify-start">
        Tên địa bàn
      </p>
      <Input
        id="tenViTri"
        name="tenViTri"
        register={register}
        // error={errors?.tenViTri?.message}
      />
      <p className="font-bold text-orange-500  flex justify-start">
        Tên địa điểm
      </p>
      <Input
        id="quocGia"
        name="quocGia"
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
