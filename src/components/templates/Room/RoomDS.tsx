import { Button } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { DeleteRoomThunk, EditRoomThunk, getRoomThunk } from "store/Room/thunk";
import { EditRoom } from ".";

export const RoomDS = () => {
  const dispatch = useAppDispatch();
  const { roomList } = useSelector((state: RootState) => state.RoomReducer);

  useEffect(() => {
    dispatch(getRoomThunk());
  }, [dispatch]);
  return (
    <div className="TableForm">
      <h1 className="text-3xl text-center mb-20 font-bold">
        Quản lý danh sách phòng
      </h1>
      <table className="w-full ml-auto mt-4">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="!p-[15px] border-[1px] w-[10%] text-center">Mã Phòng</th>
            <th className="border-[1px] w-[10%] text-center">Tên Phòng</th>
            <th className="border-[1px] w-[10%] text-center">Giá </th>
            <th className="border-[1px] w-[10%] text-center">Số người tối đa</th>
            <th className="border-[1px] w-[15%] text-center">Hình ảnh</th>
            <th className="!p-[15px] border-[1px] w-[10%] text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {roomList?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="text-center border-[1px] py-16">{item.id}</td>
                <td className="text-center border-[1px]">{item.tenPhong}</td>
                <td className="text-center border-[1px]">{item.giaTien}$</td>
                <td className="text-center border-[1px]">{item.khach}</td>
                <td className="text-center border-[1px]">
                  <img src={item.hinhAnh} alt="" className="w-[70%]" />
                </td>
                <td className="text-center border-[1px]">
                  <Button
                    className="mr-[15px] !bg-slate-500 !text-white !font-500 "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    onClick={() => {
                      dispatch(EditRoomThunk(item.id));
                    }}
                  >
                    Edit
                  </Button>
                  <EditRoom />

                  <Button
                    className="mr-[15px] !bg-red-600 !text-white !font-500 "
                    onClick={() => {
                      dispatch(DeleteRoomThunk(item.id));
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
