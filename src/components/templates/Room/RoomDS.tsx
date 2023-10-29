// import { Button } from "components";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { RootState, useAppDispatch } from "store";
// import { DeleteRoomThunk, EditRoomThunk, getRoomThunk } from "store/Room/thunk";
// import { EditRoom } from ".";
// import { toast } from "react-toastify";

// export const RoomDS = () => {
//   const dispatch = useAppDispatch();
//   const { roomList } = useSelector((state: RootState) => state.RoomReducer);

//   useEffect(() => {
//     dispatch(getRoomThunk());
//   }, [dispatch]);
//   return (
//     <div className="TableForm">
//       <h1 className="text-3xl text-center mb-20 font-bold">
//         Quản lý danh sách phòng
//       </h1>
//       <table className="w-full ml-auto mt-4">
//         <thead>
//           <tr className="bg-red-500 text-white">
//             <th className="!p-[15px] border-[1px] w-[10%] text-center">
//               Mã Phòng
//             </th>
//             <th className="border-[1px] w-[10%] text-center">Tên Phòng</th>
//             <th className="border-[1px] w-[10%] text-center">Giá </th>
//             <th className="border-[1px] w-[10%] text-center">
//               Số người tối đa
//             </th>
//             <th className="border-[1px] w-[15%] text-center">Hình ảnh</th>
//             <th className="!p-[15px] border-[1px] w-[10%] text-center">
//               Action
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {roomList?.map((item) => {
//             return (
//               <tr key={item.id}>
//                 <td className="text-center border-[1px] py-16">{item.id}</td>
//                 <td className="text-center border-[1px]">{item.tenPhong}</td>
//                 <td className="text-center border-[1px]">{item.giaTien}$</td>
//                 <td className="text-center border-[1px]">{item.khach}</td>
//                 <td className="text-center border-[1px]">
//                   <img src={item.hinhAnh} alt="" className="w-[70%]" />
//                 </td>
//                 <td className="text-center border-[1px]">
//                   <Button
//                     className="mr-[15px] !bg-slate-500 !text-white !font-500 "
//                     data-bs-toggle="modal"
//                     data-bs-target="#exampleModal2"
//                     onClick={() => {
//                       dispatch(EditRoomThunk(item.id));
//                     }}
//                   >
//                     Edit
//                   </Button>
//                   <EditRoom />

//                   <Button
//                     className="mr-[15px] !bg-red-600 !text-white !font-500 "
//                     onClick={() => {
//                       dispatch(DeleteRoomThunk(item.id));
//                       toast.success("Xóa phòng thành công");
//                     }}
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };
import { useSelector } from "react-redux";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { RoomDSType } from "types/RoomType";
import { RootState, useAppDispatch } from "store";
import { DeleteRoomThunk, EditRoomThunk, getRoomThunk } from "store/Room/thunk";
import { Space, Table } from "antd";
import { Button, EditRoom } from "components";
import { toast } from "react-toastify";
import { handleError } from "utils";
import { RoomListService } from "services";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export const RoomDS = () => {
  const { roomList } = useSelector((state: RootState) => state.RoomReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [photoUpload, setPhotoUpload] = useState<File>();
  const handleUpload = (maPhong: string) => {
    const formData = new FormData();
    formData.append("formFile", photoUpload);
    RoomListService.UploadRoom(maPhong, formData);
  };
  const columns: ColumnsType<RoomDSType> = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Tên phòng",
      dataIndex: "tenPhong",
      key: "tenPhong",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Giá",
      dataIndex: "giaTien",
      key: "giaTien",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Số khách",
      dataIndex: "khach",
      key: "khach",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      // render: (text) => <img src={text} "></img>,
      render: (text, record: RoomDSType) => (
        <form className="" id="photoUpload">
          <img src={text} alt="" className="w-[70%] lgM:w-[100%]" />
          <input
            type="file"
            onChange={(ev) => {
              setPhotoUpload(ev.target.files[0]);
            }}
          />
          <button
            className="edit-btn"
            type="button"
            onClick={() => {
              handleUpload(`${record.key}`);
              dispatch(getRoomThunk());
            }}
          >
            <UploadOutlined />
          </button>
        </form>
      ),
    },
    {
      title: "Chức năng",
      key: "action",
      render: (_, record: RoomDSType) => (
        <Space size="middle">
          <Button
            className="mr-[15px] !bg-slate-500 !text-white !font-500 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
            onClick={() => {
              dispatch(EditRoomThunk(record.key));
            }}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </Button>
          <EditRoom />
          <Button
            className="mr-[15px] !bg-red-600 !text-white !font-500 "
            onClick={() => {
              dispatch(DeleteRoomThunk(record.key));
              try {
                toast.success("Xóa thành công");
              } catch (err) {
                handleError(err);
              }
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        </Space>
      ),
    },
  ];
  const data: RoomDSType[] = roomList?.map((item) => {
    return {
      key: item.id,
      tenPhong: item.tenPhong,
      giaTien: item.giaTien,
      khach: item.khach,
      hinhAnh: item.hinhAnh,
    };
  });
  useEffect(() => {
    dispatch(getRoomThunk());
  }, [dispatch]);
  return (
    <div>
      <Button
        className="tracking-wider !border-[#ff385c] !text-[#ff385c] !font-600"
        onClick={() => {
          navigate("/");
        }}
      >
        Quay về home
      </Button>
      <h1 className="nd">Danh sách phòng</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
