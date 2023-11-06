import { useSelector } from "react-redux";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { RoomDSType } from "types/RoomType";
import { RootState, useAppDispatch } from "store";
import { DeleteRoomThunk, EditRoomThunk, getRoomThunk } from "store/Room/thunk";
import { Space, Table } from "antd";
import { Button, EditRoom } from "components";
import { RoomListService } from "services";
import { UploadOutlined } from "@ant-design/icons";
import { handleError } from "utils";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const RoomDS = () => {
  const { roomList } = useSelector((state: RootState) => state.RoomReducer);
  const dispatch = useAppDispatch();

  const [photoUpload, setPhotoUpload] = useState<File>();
  const handleUpload = async (maPhong: string) => {
    const formData = new FormData();
    formData.append("formFile", photoUpload);
    await RoomListService.UploadRoom(maPhong, formData);
    dispatch(getRoomThunk());
  };
  const columns: ColumnsType<RoomDSType> = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Tên phòng",
      dataIndex: "tenPhong",
      key: "tenPhong",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Giá",
      dataIndex: "giaTien",
      key: "giaTien",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Số khách",
      dataIndex: "khach",
      key: "khach",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",

      render: (text, record: RoomDSType) => (
        <form className="" id="photoUpload">
          <img src={text} alt="" className="w-[70%] lgM:w-[100%]" />
          <input
            type="file"
            onChange={(ev) => {
              setPhotoUpload(ev.target.files[0]);
            }}
          />
          <button
            className="edit-btn"
            type="button"
            onClick={() => {
              handleUpload(`${record.key}`);
            }}
          >
            <UploadOutlined />
          </button>
        </form>
      ),
    },
    {
      title: "Chức năng",
      key: "action",
      render: (_, record: RoomDSType) => (
        <Space size="middle">
          <Button
            className="mr-[15px] !bg-slate-500 !text-white !font-500 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
            onClick={() => {
              dispatch(EditRoomThunk(record.key));
            }}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </Button>
          <EditRoom />
          <Button
            className="mr-[15px] !bg-red-600 !text-white !font-500 "
            onClick={() => {
              dispatch(DeleteRoomThunk(record.key));
              Swal.fire({
                title: "Bạn có muốn xóa không",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes",
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(DeleteRoomThunk(record.key))
                    .unwrap()
                    .then(() => {
                      toast.success("Xóa thành công");
                    })
                    .catch((error) => {
                      handleError(error);
                    });
                }
              });
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        </Space>
      ),
    },
  ];
  const data: RoomDSType[] = roomList?.map((item) => {
    return {
      key: item.id,
      tenPhong: item.tenPhong,
      giaTien: item.giaTien,
      khach: item.khach,
      hinhAnh: item.hinhAnh,
    };
  });
  useEffect(() => {
    dispatch(getRoomThunk());
  }, [dispatch]);
  return (
    <div>
      <h1 className="nd">Danh sách phòng</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
