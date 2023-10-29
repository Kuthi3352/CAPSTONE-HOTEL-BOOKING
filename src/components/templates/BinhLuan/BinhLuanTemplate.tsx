import { Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "store";
import { BinhLuanThunk } from "store/BinhLuan";
import { BinhLuanType } from "types";
import { Rate } from "antd";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { getUserInfoLocal } from "utils";
import { Textarea } from "components";
import { commentValue } from "utils";
import { useEffect } from "react";
import { GetBinhLuanThunk } from "store/BinhLuan";

export const BinhLuanTemplate = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const dispacth = useAppDispatch();
  const { roomId } = useParams();
  const data = getUserInfoLocal();
  const { handleSubmit, register } = useForm<BinhLuanType>({
    mode: "onSubmit",
  });
  const onSubmit: SubmitHandler<BinhLuanType> = (value) => {
    const valueBL = commentValue(value);
    dispatch(BinhLuanThunk(valueBL));
    toast.success("Đánh giá thành công");
  };
  useEffect(() => {
    dispacth(GetBinhLuanThunk(params.roomId));
  }, [dispacth, params.roomId]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="mt-16 none"
        label="mã phòng"
        id="maPhong"
        name="maPhong"
        register={register}
        value={roomId}
      />
      <Input
        className="mt-16 none"
        label="mã người bình luận"
        id="maNguoiBinhLuan"
        name="maNguoiBinhLuan"
        register={register}
        value={data?.id}
      />
      <Input
        className="mt-16 none"
        label="ngày bình luận"
        id="ngayBinhLuan"
        name="ngayBinhLuan"
        register={register}
      />
      <Input
        className="mt-16 none"
        label="ngày bình luận"
        id="saoBinhLuan"
        name="saoBinhLuan"
        register={register}
      />

      <div>
        <Textarea
          className="comment-control !w-full !h-[250px]"
          register={register}
          id="noiDung"
          name="noiDung"
          placeholder="Viết đánh giá của bạn..."
        ></Textarea>
      </div>
      <div className="mt-2 text-right">
        <span className="mr-10 text-[20px] mt-4 xsM:!text-[14px] smM:text-[16px] ">
          Đánh giá:
        </span>
        <Rate
          allowHalf
          defaultValue={4}
          className="mt-4 xsM:!text-[14px] smM:text-[16px] "
        />
      </div>
      <div className="text-right">
        <button
          className="!bg-red-400 !text-white !text-[18px] xsM:!text-[12px] smM:text-[14px] !p-[3px] rounded"
          onClick={() => {}}
        >
          Đánh giá
        </button>
      </div>
    </form>
  );
};
