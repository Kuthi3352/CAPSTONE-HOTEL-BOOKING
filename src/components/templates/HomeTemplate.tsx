import { Badge, Card } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getPostionListThunk } from "store/Position/thunks";
import { getRoomPositionThunk, getRoomThunk } from "store/Room/thunk";
import { findPosition, wait } from "utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { generatePath, useNavigate } from "react-router-dom";
import { PATH } from "constant";
import { EffectCoverflow, Pagination } from "swiper/modules";

const HomeTemplate = () => {
  const dispatch = useAppDispatch();
  const navitage = useNavigate();
  const { roomList, roomPosition } = useSelector(
    (state: RootState) => state.RoomReducer
  );
  const { PositionList } = useSelector(
    (state: RootState) => state.PositionReducer
  );
  console.log(roomList);



  useEffect(() => {
    dispatch(getRoomThunk());
    dispatch(getRoomPositionThunk());
    dispatch(getPostionListThunk());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="position-list no-header">
        <h1 className="theme">Địa điểm du lịch</h1>
        <Swiper
          spaceBetween={50}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 40,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}>
          {PositionList?.map((item) => {
            return (
              <SwiperSlide
                className="my-5 mx-5"
                key={item.id}
                onClick={() => {
                  navitage(`room-list/${item.id}`);
                }}
              >
                <img
                  src={item.hinhAnh}
                  alt=""
                  className="swiper-img rounded-6"
                />
                <p className="text-center">
                  {item.tenViTri} - {item.tinhThanh}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="room-list">
        <h1 className="text-center my-5 theme">Room list</h1>
        <div className="grid grid-cols-4 gap-4">
          {roomList?.map((item) => {
            return (
              <Card
                key={item.id}
                className="card"
                hoverable
                cover={<img alt="" src={item.hinhAnh} className="pb-3" />}
                onClick={async () => {
                  const path = generatePath(PATH.roomDetail, {
                    roomId: item.id,
                  });
                  await wait(1000);
                  navitage(path);
                }}
              >
                <Badge
                  offset={[35, 0]}
                  count={
                    roomPosition
                      ? findPosition(roomPosition, item.id)
                      : undefined
                  }
                  size="default"
                >
                  <p className="price">
                    <span className="strong">
                      ${item.giaTien}</span> /Đêm
                  </p>
                </Badge>
                <h3 className="mt-3">{item.tenPhong}</h3>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;
