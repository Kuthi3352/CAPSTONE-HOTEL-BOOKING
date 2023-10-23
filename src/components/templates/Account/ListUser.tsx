// import { Button, Input } from "components";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   DeleteUserThunk,
//   EditUserThunk,
//   ListUserActions,
//   ListUserThunk,
// } from "store/DanhSachThanhVien";
// import { RootState, useAppDispatch } from "store";
// import styled from "styled-components";
// import { ChinhSuaUser } from "./ChinhSuaUser";

// export const ListUser = () => {
//   const dispatch = useAppDispatch();
//   const [nameValue, setnameValue] = useState<string>("");
//   const { listUser, searchUser } = useSelector(
//     (state: RootState) => state.ListReducer
//   );

//   useEffect(() => {
//     dispatch(ListUserThunk());
//   }, [dispatch]);
//   return (
//     <ListUsers>
//       <div>
//         <h1 className="text-3xl text-center mb-20 font-bold">
//           Quản lý Thông Tin Người Dùng
//         </h1>
//         <div className="flex !justify-end mb-2 search-input">
//           <Input
//             className=""
//             placeholder="Tìm kiếm tên người dùng"
//             value={nameValue || ""}
//             onChange={(ev) => {
//               const value = ev.target.value;
//               setnameValue(value);
//             }}
//           />

//           <Button
//             htmlType="submit"
//             className=" mt-[8px] !border-red-500 !bg-red-500 !rounded-none !px-[10px] !h-[38px]"
//             onClick={() => {
//               if (nameValue !== "") {
//                 const searchName = listUser?.filter((item) =>
//                   item.name.includes(nameValue)
//                 );
//                 dispatch(ListUserActions.searchName(searchName));
//               } else {
//                 dispatch(ListUserActions.searchName(undefined));
//               }
//             }}
//           >
//             <i className="fa-solid fa-magnifying-glass text-white"></i>
//           </Button>
//         </div>

//         <table className="w-full ml-auto">
//           <thead>
//             <tr className="bg-red-500 text-white">
//               <th className="!p-[15px] border-[1px] text-center">
//                 Mã người dùng
//               </th>
//               <th className="border-[1px] text-center">Tên người dùng</th>
//               <th className="border-[1px] text-center">Email</th>
//               <th className="border-[1px] text-center">Role</th>
//               <th className="!p-[15px] border-[1px] text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {(searchUser ? searchUser : listUser)?.map((user, index) => {
//               return (
//                 <tr key={index}>
//                   <td className="text-center border-[1px] py-16">{user.id}</td>
//                   <td className="text-center border-[1px]">{user.name}</td>
//                   <td className="text-center border-[1px]">{user.email}</td>
//                   <td className="text-center border-[1px]">{user.role}</td>
//                   <td className="text-center border-[1px]">
//                     <Button
//                       className="mr-[15px] !bg-slate-500 !text-white !font-500 "
//                       data-bs-toggle="modal"
//                       data-bs-target="#exampleModal"
//                       onClick={() => {
//                         dispatch(EditUserThunk(user?.id));
//                       }}
//                     >
//                       Edit
//                     </Button>
//                     <ChinhSuaUser />

//                     <Button
//                       className="mr-[15px] !bg-red-600 !text-white !font-500 "
//                       onClick={() => {
//                         dispatch(DeleteUserThunk(user?.id));
//                       }}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </ListUsers>
//   );
// };
// const ListUsers = styled.div`
//   width: 80%;
//   border-radius: 6px;
//   margin-bottom: 6px;
//   margin: 0 auto;
//   .search-input {
//     margin-top: 20px;
//     Input {
//       padding: 7px;
//       background-color: white;
//       border-radius: 6px 0 0 6px;
//       width: 400px;
//       transition: 0.5s !important;
//       border: 1px solid #3e3d3d60;
//       border-right: transparent;
//       &:focus {
//         border: 1px solid #da0f0fb4;
//       }
//     }
//     Button {
//       border-radius: 0 6px 6px 0 !important;
//     }
//     Button:focus-visible {
//       border: none !important;
//     }
//   }
// `;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  DeleteUserThunk,
  EditUserThunk,
  ListUserThunk,
} from "store/DanhSachThanhVien";
import { Button, ChinhSuaUser } from "components";
import { DataType } from "types";
export const ListUser = () => {
  const { listUser } = useSelector((state: RootState) => state.ListReducer);

  // Table

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthday",
      key: "birthday",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Chức vụ",
      dataIndex: "role",
      key: "role",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Chức năng",
      key: "action",

      render: (_, record: DataType) => (
        <Space size="middle">
          <Button
            className="mr-[15px] !bg-slate-500 !text-white !font-500 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              dispatch(EditUserThunk(record.key));
            }}
          >
            Edit
          </Button>
          <ChinhSuaUser />
          <Button
            className="mr-[15px] !bg-red-600 !text-white !font-500 "
            onClick={() => {
              dispatch(DeleteUserThunk(record.key));
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = listUser?.map((user) => {
    return {
      key: user.id,
      avatar: user.avatar,
      birthday: user.birthday,
      email: user.email,
      name: user.name,
      role: user.role,
    };
  });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(ListUserThunk());
  }, [dispatch]);
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
