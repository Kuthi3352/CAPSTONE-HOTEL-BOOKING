import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "store"
import { getRoomListByPositionThunk } from "store/Room/thunk"

const RoomListTemplate = () => {
    const dispatch = useAppDispatch()
    const { listId } = useParams()
    console.log(listId);


    useEffect(() => {
        dispatch(getRoomListByPositionThunk(`${listId}`))
    }, [dispatch])

    return (
        <div className="container">
            <h1>Tìm phòng theo vị trí</h1>
        </div>
    )
}

export default RoomListTemplate
