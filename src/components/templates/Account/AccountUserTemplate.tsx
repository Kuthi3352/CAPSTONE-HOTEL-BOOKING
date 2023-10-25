// import { SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "react-toastify";
// import { Input, Button } from "components";
// import { ListUserServices } from "services";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "store";
import { EditUserThunk } from "store/DanhSachThanhVien";
import { getUserInfoLocal } from "utils";

const AccountUserTemplate = () => {
  const localUser = getUserInfoLocal();
  const { EditUser } = useSelector((state: RootState) => state.ListReducer);
  console.log(EditUser);

  const dispatch = useAppDispatch();

  //   const [file , setFile] = useState()
  // <Upload onchange ={(file)=>{
  // setFile(file)
  // }}></Upload>

  //   const [file , setFile] = useState()
  // FormData.append("file",file)

  useEffect(() => {
    dispatch(EditUserThunk(localUser.id));
  }, [dispatch]);
  //   const {
  //     handleSubmit,
  //     register,
  //     // formState: { errors },
  //   } = useForm({
  //     mode: "onChange",
  //   });
  //   const onSubmit = async (value) => {
  //     console.log("valuee", value);
  // try {
  //   await ListUserServices.Admin(value);
  //   toast.success("Đăng kí thành công");
  // } catch (err) {
  //   handleError(err);
  // }
  //   };
  return (
    <div className="container no-header">
      <h1 className="text-3xl text-center mb-20 font-bold ndA">
        Thông tin người dùng
      </h1>
      {/* <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="flex userA">
          <div>
            <Input
              className="mt-16"
              label="Tên người dùng"
              id="name"
              name="name"
              // error={errors?.name?.message}
              register={register}
            />
            <Input
              className="mt-16"
              label="Email"
              id="email"
              name="email"
              // error={errors?.email?.message}
              register={register}
            />
            <Input
              className="mt-16"
              label="Mật Khẩu"
              id="password"
              name="password"
              type="password"
              // error={errors?.password?.message}
              register={register}
            />
            <Input
              className="mt-16"
              label="Số Điện Thoại"
              id="phone"
              name="phone"
              // error={errors?.phone?.message}
              register={register}
            />
          </div>
          <div className="ml-5 smM:!ml-0">
            <Input
              className="mt-16"
              label="Ngày Sinh"
              id="birthday"
              name="birthday"
              // error={errors?.birthday?.message}
              register={register}
            />
            <div className="mt-16">
              <label>Giới Tính</label>
              <select
                className="p-10 mt-8 w-full text-black rounded-6  bg-[#d1d0d0]"
                id="gender"
                name="gender"
              >
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
              </select>
            </div>
          </div>
        </div>

        <Button
          danger
          htmlType="submit"
          className="w-full !p-3 !bg-red-500 !text-white !mt-[25px] !rounded-10  !h-[48px] !font-bold !text-[18px]"
        >
          Đăng Ký
        </Button>
      </form> */}
    </div>
  );
};

export default AccountUserTemplate;
