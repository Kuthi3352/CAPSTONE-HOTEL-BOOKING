import { Button, Space, Table } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { DanhGiaThunk, DeleteBinhLuanThunk } from "store/BinhLuan";
import type { ColumnsType } from "antd/es/table";
import { BinhLuanDataType } from "types";
import Swal from "sweetalert2";
export const BinhLuanList = () => {
  const dispatch = useAppDispatch();

  const { danhGia } = useSelector((state: RootState) => state.BinhLuanReducer);
  const columns: ColumnsType<BinhLuanDataType> = [
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
      title: "Mã người bình luận",
      dataIndex: "maNguoiBinhLuan",
      key: "maNguoiBinhLuan",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Ngày bình luận",
      dataIndex: "ngayBinhLuan",
      key: "ngayBinhLuan",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Nội dung bình luận",
      dataIndex: "noiDung",
      key: "noiDung",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Số sao",
      dataIndex: "saoBinhLuan",
      key: "saoBinhLuan",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Chức năng",
      key: "action",
      render: (_, record: BinhLuanDataType) => (
        <Space size="middle">
          <Button
            className="mr-[15px] !bg-red-600 !text-white !font-500  "
            onClick={() => {
              Swal.fire({
                title: "Bạn có muốn xóa không",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes",
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(DeleteBinhLuanThunk(record.key));
                }
              });
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        </Space>
      ),
    },
  ];
  const data: BinhLuanDataType[] = danhGia?.map((item) => {
    return {
      key: item.id,
      maPhong: item.maPhong,
      maNguoiBinhLuan: item.maNguoiBinhLuan,
      ngayBinhLuan: item.ngayBinhLuan,
      noiDung: item.noiDung,
      saoBinhLuan: item.saoBinhLuan,
    };
  });
  useEffect(() => {
    dispatch(DanhGiaThunk());
  }, [dispatch]);
  return (
    <div>
      <h1 className="nd">Danh sách những người bình luận</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
