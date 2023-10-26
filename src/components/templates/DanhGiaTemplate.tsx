import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { GetBinhLuanThunk } from "store/BinhLuan";
import styled from "styled-components";
import { Rate } from "antd";

export const DanhGiaTemplate = () => {
  const dispacth = useAppDispatch();
  const { getBinhLuan } = useSelector(
    (state: RootState) => state.BinhLuanReducer
  );
  const params = useParams();

  useEffect(() => {
    dispacth(GetBinhLuanThunk(params.roomId));
  }, [dispacth, params.roomId]);
  return (
    <Container>
      <h2 className="pt-20 mt-20 border-t-[1px]">
        <i className="fa-solid fa-star mr-6 text-[22px]"></i>
        <span className="font-600  text-[22px]  xsM:!text-[16px] sM:text-[18px]">
          4,9 - 22 đánh giá
        </span>
      </h2>
      <div className="grid grid-cols-2 gap-x-20 gap-y-4 py-20 sM:text-[14px] ">
        <div className="flex justify-between items-center ">
          <div className="w-full text-base tracking-wide text-gray-700  xsM:!text-[13px]  sM:text-[14px]">
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
          <div className="w-full text-base tracking-wide text-gray-700 xsM:!text-[13px]  sM:text-[14px]">
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
          <div className="w-full text-base tracking-wide text-gray-700 xsM:!text-[13px]  sM:text-[14px]">
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
          <div className="w-full text-base tracking-wide text-gray-700 xsM:!text-[13px] sM:text-[14px]">
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
          <div className="w-full text-base tracking-wide text-gray-700 xsM:!text-[13px] sM:text-[14px]">
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
          <div className="w-full text-base tracking-wide text-gray-700 xsM:!text-[13px] sM:text-[14px]">
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
      <div className="bg-white container">
        <div className="py-5">
          <div>
            <h2 className="comments  xsM:!text-[16px] smM:text-[18px] ">
              COMMENTS
            </h2>
          </div>
          <div className="comments-container">
            {getBinhLuan?.map((item) => {
              return (
                <div className="mb-2" key={item.id}>
                  <div className="comment-content ">
                    <div className="w-[15%] xsM:!w-[35%] mdM:w-[30%]">
                      <img
                        src={item.avatar}
                        alt="avatar"
                        className="w-[80%] overflow-hidden shadow-lg rounded-full"
                      />
                    </div>
                    <div className="w-[85%]  mdM:w-[70%] ">
                      <div className="comments-name text-[18px] xsM:!text-[14px] smM:text-[16px]">
                        {item.tenNguoiBinhLuan}
                      </div>
                      <div className="font-normal text-[14px] text-gray-500 xsM:!text-[11px]">
                        {" "}
                        {item.ngayBinhLuan}
                      </div>
                      <div className="!my-20 text-[18px]  smM:text-[14px]">
                        {item.noiDung}
                      </div>
                      <div className="text-yellow-400 text-[16px] sM:!text-[12px]">
                        Đánh giá: {item.saoBinhLuan} sao
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h2 className="comments-name text-right mt-4 xsM:!text-[14px] smM:text-[16px] ">
              -Bình luận dưới tên-
            </h2>
            <div className="comment_section-Item p-2">
              <form>
                <div>
                  <textarea
                    className="comment-control"
                    rows={6}
                    placeholder="Viết bình luận của bạn..."
                  ></textarea>
                </div>
                <div className="mt-2 text-right">
                  <span className="mr-10 text-[20px] mt-4 xsM:!text-[14px] smM:text-[16px] ">
                    Đánh giá:
                  </span>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    className="mt-4 xsM:!text-[14px] smM:text-[16px] "
                  />
                </div>
                <div className="text-right">
                  <button className="!bg-red-400 !text-white !text-[18px] xsM:!text-[12px] smM:text-[14px] !p-[3px] rounded">
                    Bình luận
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div``;
