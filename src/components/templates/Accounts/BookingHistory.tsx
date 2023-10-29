import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { BookingHistoryThunk } from "store/Room/thunk";
import { BookingDataRoom } from "types/RoomType";
import { getUserInfoLocal } from "utils";
import Table, { ColumnsType } from "antd/es/table";


export const BookingHistory = () => {
  const localUser = getUserInfoLocal();
  const dispatch = useAppDispatch();
  const { bookingHistory } = useSelector(
    (state: RootState) => state.RoomReducer
  );
  const columns: ColumnsType<BookingDataRoom> = [
    {
      title: <p className="text-center">Mã phòng</p>,
      dataIndex: "maPhong",
      key: "maPhong",
      render: (text) => <p className="text-center">{text}</p>,
    },
    {
      title: "Ngày đến",
      dataIndex: "ngayDen",
      key: "ngayDen",
      render: (text) => <p style={{
        width: "80px"
      }}>{text.slice(0, 10)}</p>,
    },
    {
      title: "Ngày đi",
      dataIndex: "ngayDi",
      key: "ngayDi",
      render: (text) => <p style={{
        width: "80px"
      }}>{text.slice(0, 10)}</p>,
    },
    {
      title: <p className="text-center">Số khách</p>,
      dataIndex: "soLuongKhach",
      key: "soLuongKhach",
      render: (text) => <p className="text-center">{text}</p>,
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
