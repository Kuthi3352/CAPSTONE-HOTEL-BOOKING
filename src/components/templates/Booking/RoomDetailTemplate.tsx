import { useEffect } from "react";
import { useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { getRoomDetailThunk } from "store/Room/thunk";
import { DanhGiaTemplate } from "../DanhGiaTemplate";
import { wait } from "utils";
import { PATH } from "constant";

const RoomDetailTemplate = () => {
  const dispatch = useAppDispatch();
  const navitage = useNavigate()
  const { roomId } = useParams();
  const { currentRoom } = useSelector((state: RootState) => state.RoomReducer);

  useEffect(() => {
    dispatch(getRoomDetailThunk(roomId));
  }, [dispatch, roomId]);

  return (
    <div className="container w-[70%] no-header">
      <h1 className="text-3xl text-center font-bold mt-10">Thông tin phòng </h1>
      <button className="edit-btn" onClick={async () => {
        const path = generatePath(PATH.booking, {
          roomId: roomId,
        })
        await wait(1000);
        navitage(path);
      }}>Đặt phòng</button>
      <div className="flex gap-10 flex-col mt-5">
        <div className="w-full room-img">
          <p className="text-3xl font-700 mb-[5px]">{currentRoom?.tenPhong}</p>
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
      <div className="flex">
        <div className="mt-[35px] w-[60%]">
          <p className="font-600 text-2xl">
            Toàn bộ căn hộ. <u>Chủ nhà</u> Khầy Khang
          </p>
          <p className="text-gray-600 pb-20">
            {" "}
            <span>1 khách .</span> <span>2 phòng ngủ .</span>{" "}
            <span> 2 phòng tắm</span>
          </p>
          <div className="py-20 border-y-[1px]">
            <i className="fa-solid fa-medal text-[26px]"></i>
            <span className="text-20 font-500 ml-[20px]">
              Sungwon là Chủ nhà dễ thương
            </span>
            <p className="text-gray-600 ml-[46px]">
              Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá
              cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời
              cho khách.
            </p>
            <i className="fa-solid fa-location-dot text-[26px]"></i>
            <span className="text-20 font-500 ml-[24px]">
              Địa điểm tuyệt vời
            </span>
            <p className="text-gray-600 ml-[46px]">
              90% khách gần đây đã xếp hạng 5 sao cho vị trí này.
            </p>
            <i className="fa-solid fa-calendar-days text-[26px]"></i>
            <span className="text-20 font-500 ml-[23px]">
              Miễn phí hủy trong 48 giờ.
            </span>
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
              <p>
                <i className="fa-solid fa-kitchen-set p-14 text-[24px]"></i>
                <span className="text-gray-600">Bếp</span>
              </p>
              <p>
                <i className="fa-solid fa-elevator p-14 text-[24px]"></i>
                <span className="text-gray-600">Thang máy</span>
              </p>
              <p>
                <i className="fa-solid fa-couch p-14 text-[24px]"></i>
                <span className="text-gray-600">Ghế sofa</span>
              </p>
              <p>
                <i className="fa-solid fa-temperature-arrow-up p-14 text-[24px]"></i>
                <span className="text-gray-600">Hệ thống sưởi</span>
              </p>
            </div>
            <div>
              <p>
                <i className="fa-solid fa-wifi p-14 text-[24px]"></i>
                <span className="text-gray-600">Wifi</span>
              </p>
              <p>
                <i className="fa-solid fa-tv p-14 text-[24px]"></i>
                <span className="text-gray-600">TV</span>
              </p>
              <p>
                <i className="fa-solid fa-dumbbell p-14 text-[24px]"></i>
                <span className="text-gray-600">Phòng thể thao</span>
              </p>
              <p>
                <i className="fa-solid fa-person-swimming p-14 text-[24px]"></i>
                <span className="text-gray-600">Hồ bơi</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[40%]"></div>
      </div>
      <DanhGiaTemplate />
    </div>
  );
};

export default RoomDetailTemplate;
