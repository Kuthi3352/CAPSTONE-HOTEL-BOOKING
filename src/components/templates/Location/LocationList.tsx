import { Button } from "components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import {
  DeleteLocationThunk,
  EditLocationThunk,
  getPostionListThunk,
} from "store/Position/thunks";
import { EditLocation } from "./EditLocation";
import { PositionService } from "services";

export const LocationList = () => {
  const dispatch = useAppDispatch();
  const { PositionList } = useSelector(
    (state: RootState) => state.PositionReducer
  );
  const [photoUpload, setPhotoUpload] = useState<File>();

  const handleUpload = (maViTri: string) => {
    const formData = new FormData();
    formData.append("formFile", photoUpload);
    PositionService.UploadLocation(maViTri, formData);
  };

  useEffect(() => {
    dispatch(getPostionListThunk());
  }, [dispatch]);
  return (
    <div className="TableForm">
      <h1 className="text-3xl text-center mb-20 font-bold">Quản lý vị trí</h1>
      <table className="w-full ml-auto mt-4">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="!p-[15px] border-[1px] w-[10%] text-center">
              Tỉnh Thành
            </th>
            <th className="border-[1px] w-[10%] text-center">Địa bàn</th>
            <th className="border-[1px] w-[10%] text-center">Địa điểm</th>
            <th className="border-[1px] w-[10%] text-center">Hình ảnh</th>
            <th className="!p-[15px] border-[1px] w-[10%] text-center">
              Action
            </th>
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
                <td className="text-center border-[1px] ">
                  <form className="flex flex-col" id="photoUpload">
                    <img src={item.hinhAnh} alt="" className="w-[50%] m-auto" />
                    <input
                      type="file"
                      onChange={(ev) => {
                        console.log(ev.target.files[0]);
                        setPhotoUpload(ev.target.files[0]);
                      }}
                    />
                    <button
                      className="edit-btn"
                      type="button"
                      onClick={() => {
                        handleUpload(`${item.id}`);
                      }}
                    >
                      Thêm
                    </button>
                  </form>
                </td>
                <td className="text-center border-[1px]">
                  <Button
                    className="mr-[15px] !bg-slate-500 !text-white !font-500 "
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
                    className="mr-[15px] !bg-red-600 !text-white !font-500 "
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
