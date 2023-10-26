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
import { useEffect } from "react";
import { RoomDSType } from "types/RoomType";
import { RootState, useAppDispatch } from "store";
import { DeleteRoomThunk, EditRoomThunk, getRoomThunk } from "store/Room/thunk";
import { Space, Table } from "antd";
import { Button, EditRoom } from "components";
import { toast } from "react-toastify";
import { handleError } from "utils";
export const RoomDS = () => {
  const { roomList } = useSelector((state: RootState) => state.RoomReducer);
  const dispatch = useAppDispatch();
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
      render: (text) => <img src={text} className="w-[70%] lgM:w-[100%]"></img>,
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
            Edit
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
            Delete
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
      <h1 className="nd">Danh sách phòng</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
