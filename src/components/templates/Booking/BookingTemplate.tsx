import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "components";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { BookingSchemas, BookingSchemasType } from "schemas/BookingSchemas";
import { RootState, useAppDispatch } from "store";
import { BookingThunk, getRoomDetailThunk } from "store/Room/thunk";
import { getUserInfoLocal } from "utils";
import { newValue } from "utils/toBookingData";

const BookingTemplate = () => {
  const dispatch = useAppDispatch()
  const { roomId } = useParams()
  const { currentRoom } = useSelector((state: RootState) => state.RoomReducer)
  const data = getUserInfoLocal()


  const { register, handleSubmit, formState: { errors } } = useForm<BookingSchemasType>({
    mode: "onSubmit",
    resolver: zodResolver(BookingSchemas)
  })
  const onSubmit: SubmitHandler<BookingSchemasType> = (value) => {
    const newvalue = newValue(value)
    dispatch(BookingThunk(newvalue))
  }

  useEffect(() => {
    dispatch(getRoomDetailThunk(roomId))
  }, [dispatch])
  return (
    <div className="no-header">
      <h1>Đặt phòng</h1>
      <div className="container">
        <img src={currentRoom?.hinhAnh} alt="" className="m-auto" />
        <div className="booking-content grid grid-cols-2 mt-5">
          <div className="room-detail">
            <h2>{currentRoom?.tenPhong}</h2>
            <p>Giá tiền: ${currentRoom?.giaTien}</p>
            <p>Tiện ích</p>
            <ul>
              <li>Số lượng người: {currentRoom?.khach}</li>
              <li>Phòng ngủ : {currentRoom?.phongNgu}</li>
              <li>Phòng tắm : {currentRoom?.phongTam}</li>
              <li>Giường: {currentRoom?.giuong}</li>
              <li>{currentRoom?.wifi ? 'Wifi -' : ''}{currentRoom?.tivi ? 'Tivi' : ''}</li>
            </ul>
            <p>Các tiện ích khác:</p>
            <p>{currentRoom?.dieuHoa ? 'Điều hoà - ' : ''}{currentRoom?.doXe ? 'Có bãi đậu xe - ' : ''}{currentRoom?.hoBoi ? 'Có hồ bơi - ' : ''}{currentRoom?.bep ? 'Có bếp riêng - ' : ''}{currentRoom?.banLa ? 'Bàn là - ' : ''}{currentRoom?.banUi ? 'Bàn ủi - ' : ''}{currentRoom?.mayGiat ? 'Có máy giặt' : ''}</p>
          </div>
          <div className="booking-info">
            <h2>Lựa chọn đặt phòng</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                id="ngayDen"
                name="ngayDen"
                type="date"
                register={register}
                // error={errors?.ngayDen?.message}
                label="Ngày đến"
              ></Input>
              <Input
                id="ngayDi"
                name="ngayDi"
                type="date"
                register={register}
                // error={errors?.ngayDi.message}
                label="Ngày đi"
              ></Input>
              <Input
                id="soLuongKhach"
                name="soLuongKhach"
                type="number"
                register={register}
                error={errors?.soLuongKhach?.message}
                label="Số lượng khách"
              ></Input>
              <Input
                id="id"
                name="id"
                type="number"
                register={register}
                error={errors?.id?.message}
                label="id"
                className="none"
                value="0"
              ></Input>
              <Input
                id="maNguoiDung"
                name="maNguoiDung"
                type="text"
                register={register}
                // error={errors?.soLuongKhach.message}
                label="Mã người dùng"
                className="none"
                value={data?.id}
              ></Input>
              <Input
                id="maPhong"
                name="maPhong"
                type="number"
                register={register}
                // error={errors?.soLuongKhach.message}
                label="Mã phòng"
                className="none"
                value={`${roomId}`}
              ></Input>
              <button type="submit">đặt</button>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default BookingTemplate
