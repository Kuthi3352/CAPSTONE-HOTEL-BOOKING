import { Button } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { DanhGiaThunk, DeleteBinhLuanThunk } from "store/BinhLuan";

export const BinhLuanList = () => {
  const dispatch = useAppDispatch();
  const { danhGia } = useSelector((state: RootState) => state.BinhLuanReducer);
  useEffect(() => {
    dispatch(DanhGiaThunk());
  }, [dispatch]);
  return (
    <div className="TableForm">
      <h1 className="text-3xl text-center mb-20 font-bold">Quản lý vị trí</h1>
      <table className="w-full ml-auto">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="!p-[15px] border-[1px]  text-center">ID</th>
            <th className="border-[1px]  text-center">Mã người bình luận</th>
            <th className="border-[1px]  text-center">Mã phòng</th>
            <th className="border-[1px]  text-center">Ngày bình luận</th>
            <th className="!p-[15px] border-[1px]  text-center">
              Nội dung bình luận
            </th>
            <th className="!p-[15px] border-[1px]  text-center">
              Sao đánh giá
            </th>
            <th className="border-[1px]  text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {danhGia?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="text-center border-[1px] py-16">{item.id}</td>
                <td className="text-center border-[1px]">
                  {item.maNguoiBinhLuan}
                </td>
                <td className="text-center border-[1px]">{item.maPhong}</td>
                <td className="text-center border-[1px] ">
                  {item.ngayBinhLuan}
                </td>
                <td className="text-center border-[1px] ">{item.noiDung}</td>
                <td className="text-center border-[1px] ">
                  {item.saoBinhLuan}
                </td>
                <td className="text-center border-[1px]">
                  <Button
                    className="mr-[15px] !bg-red-600 !text-white !font-500 "
                    onClick={() => {
                      dispatch(DeleteBinhLuanThunk(item.id));
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
