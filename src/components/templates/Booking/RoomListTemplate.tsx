import { Card } from "components";
import { PATH } from "constant";
import QueryString from "qs";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { getRoomListByPositionThunk } from "store/Room/thunk";
import { wait } from "utils";

const RoomListTemplate = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { listId } = useParams();
  const path = QueryString.stringify(
    {
      maViTri: listId,
    },
    { addQueryPrefix: true }
  );
  const { roomListByPosition } = useSelector(
    (state: RootState) => state.RoomReducer
  );

  useEffect(() => {
    dispatch(getRoomListByPositionThunk(path));
  }, [dispatch, path]);

  return (
    <div className="container no-header  ">
      <h1 className="comments">Tìm phòng theo vị trí</h1>
      <div className="room-list mt-20">
        <div className="grid grid-cols-2 gap-5 mdM:!grid-cols-1 ">
          <div>
            {roomListByPosition?.map((item) => {
              return (
                <div>
                  <div className="text-center my-20 tracking-[3px] text-[20px] smM:!text-[13px] lgM:text-[16px] ">
                    {item.tenPhong}
                  </div>
                  <Card
                    key={item.id}
                    className="card"
                    hoverable
                    cover={
                      <img
                        alt=""
                        src={item.hinhAnh}
                        className="!rounded-[8px] !h-[170px]"
                      />
                    }
                    onClick={async () => {
                      const path = generatePath(PATH.roomDetail, {
                        roomId: item.id,
                      });
                      await wait(1000);
                      navigate(path);
                    }}
                  ></Card>
                </div>
              );
            })}
          </div>
          <div className="h-[100%] w-[100%] mdM:!h-[400px] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1698344156420!5m2!1svi!2s"
              className="w-full h-full !rounded-[8px] "
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomListTemplate;
