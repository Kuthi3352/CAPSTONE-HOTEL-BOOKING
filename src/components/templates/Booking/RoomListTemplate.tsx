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
    <div className="container no-header">
      <h1>Tìm phòng theo vị trí</h1>
      <div className="room-list mt-20">
        <div className="grid grid-cols-2 gap-5">
          {roomListByPosition?.map((item) => {
            return (
              <Card
                key={item.id}
                className="card"
                hoverable
                cover={<img alt="" src={item.hinhAnh} className="pb-5" />}
                onClick={async () => {
                  const path = generatePath(PATH.roomDetail, {
                    roomId: item.id,
                  });
                  await wait(1000);
                  navigate(path);
                }}
              ></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomListTemplate;
