import { useSelector } from "react-redux";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { RoomDSType } from "types/RoomType";
import { RootState, useAppDispatch } from "store";
import { UploadOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import { Button, EditLocation } from "components";
import { toast } from "react-toastify";
import { handleError } from "utils";
import {
  DeleteLocationThunk,
  EditLocationThunk,
  getPostionListThunk,
} from "store/Position/thunks";
import { PositionDataType } from "types/PositinonType";
import { PositionService } from "services";

export const LocationList = () => {
  const dispatch = useAppDispatch();

  const { PositionList } = useSelector(
    (state: RootState) => state.PositionReducer
  );
  const [photoUpload, setPhotoUpload] = useState<File>();

  const handleUpload = async (maViTri: string) => {
    const formData = new FormData();
    formData.append("formFile", photoUpload);
    await PositionService.UploadLocation(maViTri, formData);
    dispatch(getPostionListThunk());
  };

  const columns: ColumnsType<PositionDataType> = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Tỉnh thành",
      dataIndex: "tinhThanh",
      key: "tinhThanh",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Địa bàn",
      dataIndex: "tenViTri",
      key: "tenViTri",
      render: (text) => <p>{text}</p>,
    },

    {
      title: "Địa điểm",
      dataIndex: "quocGia",
      key: "quocGia",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text, record: PositionDataType) => (
        <form className="" id="photoUpload">
          <img src={text} alt="" className="w-[70%]" />
          <input
            className=""
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
            data-bs-target="#exampleModal1"
            onClick={() => {
              console.log(record.key);
              dispatch(EditLocationThunk(record.key));
            }}
          >
            Edit
          </Button>
          <EditLocation />
          <Button
            className="mr-[15px] !bg-red-600 !text-white !font-500 "
            onClick={() => {
              dispatch(DeleteLocationThunk(record.key));
              try {
                toast.success("Xóa thành công");
              } catch (err) {
                handleError(err);
              }
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const data: PositionDataType[] = PositionList?.map((item) => {
    return {
      key: item.id,
      tinhThanh: item.tinhThanh,
      tenViTri: item.tenViTri,
      quocGia: item.quocGia,
      hinhAnh: item.hinhAnh,
    };
  });
  useEffect(() => {
    dispatch(getPostionListThunk());
  }, [dispatch]);
  return (
    <div>
      <h1 className="nd">Danh sách vị trí</h1>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};
