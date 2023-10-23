import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Input } from "components";
import { useAppDispatch } from "store";
import { AddLocationSchema, AddLocationSchemaType } from "schemas";
import { PositionService } from "services";
import { getPostionListThunk } from "store/Position/thunks";
import { handleError } from "utils";
import { zodResolver } from "@hookform/resolvers/zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { PositionType } from "types/PositinonType";


export const AddLocation = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AddLocationSchemaType>({
    mode: "onChange",
    resolver: zodResolver(AddLocationSchema),
  });
  const onSubmit: SubmitHandler<AddLocationSchemaType> = async (value) => {
    try {
      await PositionService.AddLocation(value);
      toast.success("Thêm địa điểm thành công");
      dispatch(getPostionListThunk());
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="AddForm">
      <h1 className="text-3xl text-center mb-3 font-bold">
        Thêm địa điểm
      </h1>
      <Input
        id="tinhThanh"
        name="tinhThanh"
        className="add-position-input"
        register={register}
        error={errors?.tinhThanh?.message}
        label="Tên tỉnh thành"
      />
      <Input
        id="tenViTri"
        name="tenViTri"
        className="mt-3 add-position-input"
        register={register}
        error={errors?.tenViTri?.message}
        label="Tên địa bàn"
      />
      <Input
        id="quocGia"
        name="quocGia"
        className="mt-3 add-position-input"
        register={register}
        error={errors?.quocGia?.message}
        label="Tên quốc gia"
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
