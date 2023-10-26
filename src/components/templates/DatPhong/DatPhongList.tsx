import { Button, Space, Table } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState, useAppDispatch } from "store";
import type { ColumnsType } from "antd/es/table";
import { DatPhongDataType } from "types/DatPhongType";
import {
  DeleteDatPhongThunk,
  EditDatPhongThunk,
  getDatPhongThunk,
} from "store/DatPhong";
import { EditDatPhong } from "./EditDatPhong";

export const DatPhongList = () => {
  const dispatch = useAppDispatch();
  const { datPhongList } = useSelector(
    (state: RootState) => state.DatPhongReducer
  );
  const columns: ColumnsType<DatPhongDataType> = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Mã phòng",
      dataIndex: "maPhong",
      key: "maPhong",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Mã người dùng",
      dataIndex: "maNguoiDung",
      key: "maNguoiDung",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Ngày đến",
      dataIndex: "ngayDen",
      key: "ngayDen",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Ngày đi",
      dataIndex: "ngayDi",
      key: "ngayDi",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Số lượng khách",
      dataIndex: "soLuongKhach",
      key: "soLuongKhach",
      render: (text) => <p>{text}</p>,
    },

    {
      title: "Chức năng",
      key: "action",

      render: (_, record: DatPhongDataType) => (
        <Space size="middle">
          <Button
            className="mr-[15px] !bg-slate-500 !text-white !font-500"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal5"
            onClick={() => {
              dispatch(EditDatPhongThunk(record.key));
            }}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </Button>
          <EditDatPhong />
          <Button
            className="mr-[15px] !bg-red-600 !text-white !font-500 "
            onClick={() => {
              dispatch(DeleteDatPhongThunk(record.key));
              toast.success("Xóa thành công");
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        </Space>
      ),
    },
  ];
  const data: DatPhongDataType[] = datPhongList?.map((item) => {
    return {
      key: item.id,
      maPhong: item.maPhong,
      maNguoiDung: item.maNguoiDung,
      ngayDen: item.ngayDen,
      ngayDi: item.ngayDi,
      soLuongKhach: item.soLuongKhach,
    };
  });
  useEffect(() => {
    dispatch(getDatPhongThunk());
  }, [dispatch]);
  return (
    <div>
      <h1 className="nd">Danh sách khách đã đặt</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
