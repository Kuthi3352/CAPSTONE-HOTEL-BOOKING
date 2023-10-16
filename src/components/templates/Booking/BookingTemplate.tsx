import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { RootState, useAppDispatch } from "store";
import { getRoomDetailThunk } from "store/Room/thunk";
import { getUserInfoLocal } from "utils";

const BookingTemplate = () => {
  const dispatch = useAppDispatch()
  const { roomId } = useParams()
  const { currentRoom } = useSelector((state: RootState) => state.RoomReducer)
  const data = getUserInfoLocal()
  console.log(data.id);
  
  

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
            <form action="">
              <div className="booking-input">
                <label htmlFor="">Ngày đến</label>
                <input type="date" id="ngayDen" name="ngayDen" />
              </div>
              <div className="booking-input">
                <label htmlFor="">Ngày đi</label>
                <input type="date" id="ngayDi" name="ngayDi" />
              </div>
              <div className="booking-input">
                <label htmlFor="">Số lượng người ở</label>
                <input type="number" id="person" name="person" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingTemplate
