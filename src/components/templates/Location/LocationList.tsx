import { Button } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import {
  DeleteLocationThunk,
  EditLocationThunk,
  getPostionListThunk,
} from "store/Position/thunks";
import { EditLocation } from "./EditLocation";

export const LocationList = () => {
  const dispatch = useAppDispatch();
  const { PositionList } = useSelector(
    (state: RootState) => state.PositionReducer
  );

  useEffect(() => {
    dispatch(getPostionListThunk());
  }, [dispatch]);
  return (
    <div className="TableForm">
      <h1 className="text-3xl text-center mb-20 font-bold">Quản lý vị trí</h1>
      <table className="w-full ml-auto">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="!p-[15px] border-[1px] w-[10%]">Tỉnh Thành</th>
            <th className="border-[1px] w-[10%]">Địa bàn</th>
            <th className="border-[1px] w-[10%]">Địa điểm</th>
            <th className="border-[1px] w-[10%]">Hình ảnh</th>
            <th className="!p-[15px] border-[1px] w-[10%]">Action</th>
          </tr>
        </thead>
        <tbody>
          {PositionList?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="text-center border-[1px] py-16">
                  {item.tinhThanh}
                </td>
                <td className="text-center border-[1px]">{item.tenViTri}</td>
                <td className="text-center border-[1px]">{item.quocGia}</td>
                <td className="text-center border-[1px]">
                  <img src={item.hinhAnh} alt="" className="w-[50%]" />
                </td>
                <td className="text-center border-[1px]">
                  <Button
                    className="mr-[15px] !bg-yellow-400 !text-white !font-500"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    onClick={() => {
                      dispatch(EditLocationThunk(item.id));
                    }}
                  >
                    Edit
                  </Button>
                  <EditLocation />
                  <Button
                    className="mr-[15px] !bg-sky-600 !text-white !font-500 "
                    onClick={() => {
                      dispatch(DeleteLocationThunk(item.id));
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
