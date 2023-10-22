import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { DanhGiaTemplate } from "../DanhGiaTemplate";
import { useForm, SubmitHandler } from "react-hook-form";
import { BookingSchemas, BookingSchemasType } from "schemas/BookingSchemas";
import { BookingThunk, getRoomDetailThunk } from "store/Room/thunk";
import { getUserInfoLocal } from "utils";
import { newValue } from "utils/toBookingData";
import cn from 'classnames'
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "components";

const RoomDetailTemplate = () => {
  const dispatch = useAppDispatch();
  const { roomId } = useParams();
  const { currentRoom } = useSelector((state: RootState) => state.RoomReducer);
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
    dispatch(getRoomDetailThunk(roomId));
  }, [dispatch, roomId]);

  return (
    <div className="container w-[70%] no-header">
      <h1 className="text-3xl text-center font-bold mt-10 logo">Thông tin phòng </h1>
      <div className="flex gap-10 flex-col mt-5">
        <div className="w-full room-img">
          <p className="text-3xl font-700 mb-[5px] ">{currentRoom?.tenPhong}</p>
          <div className="flex justify-between">
            <p>
              <i className="fa-solid fa-star"></i> 4 . <u>89 đánh giá .</u>{" "}
              <span>
                <i className="fa-solid fa-award"></i> Chủ nhà siêu dễ thương
              </span>
            </p>
            <div>
              <span className="font-600 mr-10">
                <i className="fa-regular fa-share-from-square"></i> Chia sẽ
              </span>
              <span className="font-600">
                <i className="fa-regular fa-heart"></i> Lưu
              </span>
            </div>
          </div>

          <img
            src={currentRoom?.hinhAnh}
            className="m-auto !mt-[18px] w-full"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-5 mt-3">
        <div className="mt-[35px] w-[60%]">
          <p className="font-600 text-2xl logo">
            Toàn bộ căn hộ
          </p>
          <p className="text-gray-600 pb-20">

            <span>{currentRoom?.khach} khách - </span> <span>{currentRoom?.phongNgu} phòng ngủ - </span>
            <span>{currentRoom?.phongTam} phòng tắm</span>
          </p>
          <div className="py-20 border-y-[1px]">
            <div className="mt-2">
              <i className="fa-solid fa-medal text-[26px] logo"></i>
              <span className="text-20 font-500 ml-[20px]">
                Sungwon là Chủ nhà dễ thương
              </span>
              <p className="text-gray-600 ml-[46px]">
                {currentRoom?.moTa}
              </p>
            </div>
            <div className="mt-2">
              <i className="fa-solid fa-location-dot text-[26px] logo"></i>
              <span className="text-20 font-500 ml-[24px] ">
                Địa điểm tuyệt vời
              </span>
              <p className="text-gray-600 ml-[46px]">
                90% khách gần đây đã xếp hạng 5 sao cho vị trí này.
              </p>
            </div>
            <div className="mt-3">
              <i className="fa-solid fa-calendar-days text-[26px] logo"></i>
              <span className="text-20 font-500 ml-[23px]">
                Miễn phí hủy trong 48 giờ.
              </span>
            </div>
          </div>
          <div className="mb-20">
            <img src="/images/air.jpg" alt="" className="w-[20%] py-20" />
            <p className="mb-10">
              Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà
              hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề
              khác như sự cố trong quá trình nhận phòng.
            </p>
            <u className="font-bold">Tìm hiểu thêm</u>
          </div>
          <div className="py-20 border-y-[1px]">
            <p className="font-600 text-2xl">Mô tả về căn hộ</p>
            <p className="text-gray-600">{currentRoom?.moTa}</p>
          </div>
          <h3 className="font-600 text-2xl mt-10">
            Nơi này có những gì cho bạn
          </h3>
          <div className="grid grid-cols-2">
            <div>
              <p className={cn({
                logo: currentRoom?.wifi === true
              })}>
                <i className="fa-solid fa-kitchen-set p-14 text-[24px]"></i>
                <span>Wifi</span>
              </p>
              <p className={cn({
                logo: currentRoom?.tivi === true
              })}>
                <i className="fa-solid fa-tv p-14 text-[24px]"></i>
                <span >Tivi</span>
              </p>
              <p className={cn({
                logo: currentRoom?.dieuHoa === true
              })}>
                <i className="fa-solid fa-kitchen-set p-14 text-[24px]"></i>
                <span>Điều hoà nhiệt độ</span>
              </p>
              <p className={cn({
                logo: currentRoom?.hoBoi === true
              })}>
                <i className="fa-solid fa-kitchen-set p-14 text-[24px]"></i>
                <span>Hồ bơi</span>
              </p>
            </div>
            <div>
              <p className={cn({
                logo: currentRoom?.doXe === true
              })}>
                <i className="fa-solid fa-wifi p-14 text-[24px]"></i>
                <span >Bãi đậu xe</span>
              </p>
              <p className={cn({
                logo: currentRoom?.mayGiat === true
              })}>
                <i className="fa-solid fa-dumbbell p-14 text-[24px]"></i>
                <span >Máy giặt</span>
              </p>
              <p className={cn({
                logo: currentRoom?.banUi === true
              })}>
                <i className="fa-solid fa-person-swimming p-14 text-[24px]"></i>
                <span >Bàn là</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[40%] form-booking">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center text-xl logo mb-4">Hãy cho chúng tôi biết về chuyến đi của bạn</h3>
            <Input
              id="ngayDen"
              name="ngayDen"
              type="date"
              register={register}
              error={errors?.ngayDen?.message}
              min="2023-10-05"
              max="2028-01-01"
              label="Từ ngày"
            ></Input>
            <Input
              id="ngayDi"
              name="ngayDi"
              type="date"
              min="2023-10-05"
              max="2028-01-01"
              register={register}
              error={errors?.ngayDi?.message}
              label="Đến ngày"
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
              label="Mã người dùng"
              className="none"
              value={data?.id}
            ></Input>
            <Input
              id="maPhong"
              name="maPhong"
              type="number"
              register={register}
              label="Mã phòng"
              className="none"
              value={`${roomId}`}
            ></Input>
            <div className="booking-content mt-2">
              <h3 className="mt-2 text-center theme">Thông tin đặt phòng</h3>
              <p>Giá tiền: <span className="strong italic">${currentRoom?.giaTien}</span> / đêm</p>

            </div>
            <div className="booking">
              <button type="submit" className="booking-btn hover">Đặt phòng</button>
            </div>
          </form>
        </div>
      </div>
      <DanhGiaTemplate />
    </div>
  );
};

export default RoomDetailTemplate;
