import { Badge, Card } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getRoomPositionThunk, getRoomThunk } from "store/Room/thunk";
import styled from "styled-components";
import { findPosition } from "utils";

const HomeTemplate = () => {
    const dispatch = useAppDispatch();
    const { RoomList, RoomPosition } = useSelector((state: RootState) => state.RoomReducer);


    console.log(RoomPosition);

    useEffect(() => {
        dispatch(getRoomThunk());
        dispatch(getRoomPositionThunk())
    }, [dispatch]);
    return (
        <Container>
            <h1 className="text-3xl font-600 text-center my-5">Room list</h1>
            <div className="grid grid-cols-2 gap-5">
                {RoomList?.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            className="card"
                            hoverable
                            cover={<img alt="" src={item.hinhAnh} />}
                        >
                            <Badge count={RoomPosition ? findPosition(RoomPosition, item.id) : undefined}
                            size="default"
                            >
                                <h3 className="mt-5">{item.tenPhong}</h3>
                            </Badge>
                        </Card>
                    );
                })}
            </div>
        </Container >
    );
};

export default HomeTemplate;

const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  .card {
    min-height:500px;
  }
  h3{
    font-size:20px;
    font-weight: bold;
  }
`;
