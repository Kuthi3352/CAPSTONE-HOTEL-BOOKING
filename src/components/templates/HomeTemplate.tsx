import { Badge, Card } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getPostionListThunk } from "store/Position/thunks";
import { getRoomPositionThunk, getRoomThunk } from "store/Room/thunk";
import { findPosition, wait } from "utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { generatePath, useNavigate } from "react-router-dom";
import { PATH } from "constant";

const HomeTemplate = () => {
    const dispatch = useAppDispatch();
    const navitage = useNavigate()
    const { roomList, roomPosition } = useSelector((state: RootState) => state.RoomReducer);
    const { PositionList } = useSelector((state: RootState) => state.PositionReducer);

    useEffect(() => {
        dispatch(getRoomThunk());
        dispatch(getRoomPositionThunk())
        dispatch(getPostionListThunk())
    }, [dispatch]);
    return (
        <div className="container">
            <div className="position-list">
                <h1 >Địa điểm du lịch</h1>
                <Swiper spaceBetween={50}
                    slidesPerView={4}
                >
                    {
                        PositionList?.map(item => {
                            return <SwiperSlide className="hover my-5 mx-5" key={item.id} onClick={() => {
                                navitage(`room-list/${item.id}`)
                            }}>
                                <img src={item.hinhAnh} alt="" className="swiper-img rounded-6" />
                                <p className="text-center">{item.tenViTri} - {item.tinhThanh}</p>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
            <div className="room-list">
                <h1 className="text-3xl font-600 text-center my-5">Room list</h1>
                <div className="grid grid-cols-2 gap-5">
                    {roomList?.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                className="card"
                                hoverable
                                cover={<img alt="" src={item.hinhAnh} className="pb-5" />}
                                onClick={async () => {
                                    const path = generatePath(PATH.roomDetail, {
                                        roomId: item.id
                                    })
                                    await wait(1000)
                                    navitage(path)
                                }}
                            >
                                <Badge count={roomPosition ? findPosition(roomPosition, item.id) : undefined}
                                    size="default"
                                >
                                    <h3 className="mt-5">{item.tenPhong}</h3>
                                </Badge>
                            </Card>
                        );
                    })}
                </div>
            </div>

        </div >
    );
};

export default HomeTemplate;

