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
import { PositionService } from "services";
import { handleError } from "utils";
import { error } from "console";

export const LocationList = () => {
  const dispatch = useAppDispatch();
  const { PositionList } = useSelector(
    (state: RootState) => state.PositionReducer
  );
  // const [upload, setUpload] = useState([]);
  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("fileName", file.name);
  //     console.log(formData.get("fileName"));
  //     try {
  //       await PositionService.UploadLocation("").then((response) => {
  //         console.log("response", response);
  //       });
  //     } catch (err) {
  //       return handleError(error);
  //     }
  //   }
  // };

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
                  <form>
                    {/* onSubmit={handleFileUpload} */}
                    <img
                      src={item.hinhAnh}
                      alt=""
                      className="w-[50%]"
                      // onChange={handleFileUpload}
                    />
                    <button type="submit">them</button>
                  </form>
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
