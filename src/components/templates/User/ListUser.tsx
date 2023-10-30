import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  DeleteUserThunk,
  EditUserThunk,
  ListUserThunk,
  ListUserActions,
} from "store/DanhSachThanhVien";
import { Button, ChinhSuaUser, Input, Skeleton } from "components";
import { DataType } from "types";
import { toast } from "react-toastify";
import styled from "styled-components";

export const ListUser = () => {
  const { listUser, searchUser, isFetchingUser } = useSelector(
    (state: RootState) => state.ListReducer
  );
  const [nameValue, setnameValue] = useState<string>("");

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
            <i className="fa-regular fa-pen-to-square"></i>
          </Button>
          <ChinhSuaUser />
          <Button
            className="mr-[15px] !bg-red-600 !text-white !font-500 "
            onClick={() => {
              dispatch(DeleteUserThunk(record.key));
              toast.success("Xóa thành công");
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = (searchUser ? searchUser : listUser)?.map((user) => {
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
  if (isFetchingUser) {
    return (
      <ContainerUser className="no-header">
        <Skeleton active className="mt-[10px]"></Skeleton>
      </ContainerUser>
    );
  }
  return (
    <ContainerUser>
      <h1 className="nd">Danh sách thành viên</h1>

      <div className="flex !justify-start  search-input ">
        <div className="w-[20%]">
          <Input
            className=""
            placeholder="Tìm kiếm tên người dùng"
            value={nameValue || ""}
            onChange={(ev) => {
              const value = ev.target.value;
              setnameValue(value);
            }}
          />
        </div>

        <Button
          htmlType="submit"
          className=" mt-[8px] !border-red-500 !bg-red-500 !px-[10px] !h-[37px] !w-[50px]  mdM:!w-[30px] mdM:!h-[26px] "
          onClick={() => {
            if (nameValue !== "") {
              const searchName = listUser?.filter((item) =>
                item.name.includes(nameValue)
              );
              dispatch(ListUserActions.searchName(searchName));
            } else {
              dispatch(ListUserActions.searchName(undefined));
            }
          }}
        >
          <i className="fa-solid fa-magnifying-glass text-white"></i>
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </ContainerUser>
  );
};
const ContainerUser = styled.div``;
