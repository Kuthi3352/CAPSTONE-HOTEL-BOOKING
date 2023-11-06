import { useSelector } from "react-redux";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { RoomDSType } from "types/RoomType";
import { RootState, useAppDispatch } from "store";
import { UploadOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import { Button, EditLocation } from "components";
import Swal from "sweetalert2";
import {
  DeleteLocationThunk,
  EditLocationThunk,
  getPostionListThunk,
} from "store/Position/thunks";
import { PositionDataType } from "types/PositinonType";
import { PositionService } from "services";
import { toast } from "react-toastify";
import { handleError } from "utils";
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
              dispatch(EditLocationThunk(record.key));
            }}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </Button>
          <EditLocation />
          <Button
            className="mr-[15px] !bg-red-600 !text-white !font-500 "
            onClick={() => {
              Swal.fire({
                title: "Bạn có muốn xóa không",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes",
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(DeleteLocationThunk(record.key))
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
