import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { DanhGiaThunk } from "store/BinhLuan";
import styled from "styled-components";

export const DanhGiaTemplate = () => {
  const dispacth = useAppDispatch();
  const { danhGia } = useSelector((state: RootState) => state.BinhLuanReducer);

  useEffect(() => {
    dispacth(DanhGiaThunk());
  }, [dispacth]);
  return (
    <Container>
      <h2 className="pt-20 mt-20 border-t-[1px]">
        <i className="fa-solid fa-star mr-6 text-[22px]"></i>
        <span className="font-600  text-[22px]">4,9 - 22 đánh giá</span>
      </h2>
      <div className="grid grid-cols-2 gap-x-20 gap-y-4 py-20">
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Mức độ sạch sẽ
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full"></div>
            </div>
            <p className="ml-[8px] font-500">5,0</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Giao Tiếp
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full w-[90%]"></div>
            </div>
            <p className="ml-[8px] font-500">4,8</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Độ chính xác
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full"></div>
            </div>
            <p className="ml-[8px] font-500">5,0</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Nhận Phòng
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full w-[95%]"></div>
            </div>
            <p className="ml-[8px] font-500">4,9</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Vị trí
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full w-[95%]"></div>
            </div>
            <p className="ml-[8px] font-500">4,7</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">
            Giá Trị
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full"></div>
            </div>
            <p className="ml-[8px] font-500">5,0</p>
          </div>
        </div>
      </div>
      {danhGia?.map((item) => {
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[100px] gap-y-4 sm:w-4/5 mt-5" key={item?.id}>
            <div className="mb-2">
              <div className="flex items-center">
                <div>
                  <img
                    src="/images/nv1.jpg"
                    alt="avatar"
                    className="w-[45px] h-[45px] rounded-full overflow-hidden shadow-lg"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-base tracking-wide text-gray-900">
                    Ẩn danh
                  </h4>
                  <span className="font-normal text-sm text-gray-500">
                    {item.ngayBinhLuan}
                  </span>
                </div>
              </div>
              <div className="mt-10">{item.noiDung}</div>
            </div>
            <div className="mb-2">
              <div className="flex items-center">
                <div>
                  <img
                    src="/images/nv1.jpg"
                    alt="avatar"
                    className="w-[45px] h-[45px] rounded-full overflow-hidden shadow-lg"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-base tracking-wide text-gray-900">
                    Ẩn danh
                  </h4>
                  <span className="font-normal text-sm text-gray-500">
                    {item.ngayBinhLuan}
                  </span>
                </div>
              </div>
              <div className="mt-10">Trên cả đỉnh</div>
            </div>
          </div>
        );
      })}
    </Container>
  );
};
const Container = styled.div``;
