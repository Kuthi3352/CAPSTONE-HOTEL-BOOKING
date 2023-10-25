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
import { Upload, UploadProps } from "antd";

export const LocationList = () => {
  const dispatch = useAppDispatch();
  const { PositionList } = useSelector(
    (state: RootState) => state.PositionReducer
  );
  const [file, setFile] = useState<File>();

  const handleUpload = (maViTri: string) => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(file);

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
                    <Upload
                      onChange={(file) => {
                        console.log("test", file);

                        setFile(file);
                      }}
                    >
                      <button
                        className="edit-btn"
                        type="button"
                        onClick={() => {
                          handleUpload(`${item.id}`);
                          dispatch(getPostionListThunk());
                        }}
                      >
                        Thêm
                      </button>
                    </Upload>

                    {/* <input
                      type="file"
                      onChange={(ev) => {
                        console.log(ev.target.files[0]);
                        setPhotoUpload(ev.target.files[0]);
                      }}
                    /> */}
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

// -------------------------

// import { useSelector } from "react-redux";
// import type { ColumnsType } from "antd/es/table";
// import { useEffect } from "react";
// import { RoomDSType } from "types/RoomType";
// import { RootState, useAppDispatch } from "store";

// import { Space, Table, Upload } from "antd";
// import { Button, EditLocation } from "components";
// import { toast } from "react-toastify";
// import { handleError } from "utils";
// import {
//   DeleteLocationThunk,
//   EditLocationThunk,
//   getPostionListThunk,
// } from "store/Position/thunks";
// import { PositionDataType } from "types/PositinonType";
// export const LocationList = () => {
//   const dispatch = useAppDispatch();
//   const { PositionList } = useSelector(
//     (state: RootState) => state.PositionReducer
//   );

//   const columns: ColumnsType<PositionDataType> = [
//     {
//       title: "ID",
//       dataIndex: "key",
//       key: "key",
//       render: (text) => <p>{text}</p>,
//     },
//     {
//       title: "Tỉnh thành",
//       dataIndex: "tinhThanh",
//       key: "tinhThanh",
//       render: (text) => <p>{text}</p>,
//     },
//     {
//       title: "Địa bàn",
//       dataIndex: "tenViTri",
//       key: "tenViTri",
//       render: (text) => <p>{text}</p>,
//     },

//     {
//       title: "Địa điểm",
//       dataIndex: "quocGia",
//       key: "quocGia",
//       render: (text) => <p>{text}</p>,
//     },
//     {
//       title: "Hình ảnh",
//       dataIndex: "hinhAnh",
//       key: "hinhAnh",
//       render: (text) => <img src={text} className="w-[40%] 3xlM:w-[90%]"></img>,
//     },
//     {
//       title: "Chức năng",
//       key: "action",
//       render: (_, record: RoomDSType) => (
//         <Space size="middle">
//           <Button
//             className="mr-[15px] !bg-slate-500 !text-white !font-500 "
//             data-bs-toggle="modal"
//             data-bs-target="#exampleModal1"
//             onClick={() => {
//               console.log(record.key);
//               dispatch(EditLocationThunk(record.key));
//             }}
//           >
//             Edit
//           </Button>
//           <EditLocation />
//           <Button
//             className="mr-[15px] !bg-red-600 !text-white !font-500 "
//             onClick={() => {
//               dispatch(DeleteLocationThunk(record.key));
//               try {
//                 toast.success("Xóa thành công");
//               } catch (err) {
//                 handleError(err);
//               }
//             }}
//           >
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];
//   const data: PositionDataType[] = PositionList?.map((item) => {
//     return {
//       key: item.id,
//       tinhThanh: item.tinhThanh,
//       tenViTri: item.tenViTri,
//       quocGia: item.quocGia,
//       hinhAnh: item.hinhAnh,
//     };
//   });
//   useEffect(() => {
//     dispatch(getPostionListThunk());
//   }, [dispatch]);
//   return (
//     <div>
//       <h1 className="nd">Danh sách vị trí</h1>
//       <Table columns={columns} dataSource={data} />
//     </div>
//   );
// };
