import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { RootState, useAppDispatch } from "store";
import { getRoomDetailThunk } from "store/Room/thunk";

const RoomDetailTemplate = () => {
  const dispatch = useAppDispatch()
  const { roomId } = useParams();
  const { currentRoom } = useSelector((state: RootState) => state.RoomReducer)

  useEffect(() => {
    dispatch(getRoomDetailThunk(roomId))
  }, [dispatch, roomId])

  return (
    <div className="container">
      <h1 className="text-3xl text-center font-bold mt-10">Thông tin phòng </h1>
      <div className="flex gap-10 flex-col mt-5">
        <div className="w-full room-img">
          <img src={currentRoom?.hinhAnh} className="m-auto" alt="" />
          <div className="room-detail w-3/5 mt-5">
            <p className="italic">{currentRoom?.moTa}</p>
            <button>Đặt phòng</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetailTemplate
 
