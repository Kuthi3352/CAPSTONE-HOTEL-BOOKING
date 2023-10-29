import Table, { ColumnsType } from "antd/es/table";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { BookingHistoryThunk } from "store/Room/thunk";
import { BookingDataRoom } from "types/RoomType";
import { getUserInfoLocal } from "utils";

export const BookingHistory = () => {
  const localUser = getUserInfoLocal();
  const dispatch = useAppDispatch();
  const { bookingHistory } = useSelector(
    (state: RootState) => state.RoomReducer
  );
  const columns: ColumnsType<BookingDataRoom> = [
    {
      title: "Mã phòng",
      dataIndex: "maPhong",
      key: "maPhong",
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
      title: "Số khách",
      dataIndex: "soLuongKhach",
      key: "soLuongKhach",
      render: (text) => <p>{text}</p>,
    },
  ];
  const data: BookingDataRoom[] = bookingHistory?.map((item) => {
    return {
      key: item.id,
      maPhong: item.maPhong,
      ngayDen: item.ngayDen,
      ngayDi: item.ngayDi,
      soLuongKhach: item.soLuongKhach,
      maNguoiDung: item.maNguoiDung,
    };
  });
  useEffect(() => {
    dispatch(BookingHistoryThunk(localUser?.id));
  }, [dispatch, localUser?.id]);
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
