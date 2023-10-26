// import { toast } from "react-toastify";
// import { Input, Button } from "components";
// import { ListUserServices } from "services";

import { AccountInfo, Tabs } from "components";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "store";
import { EditUserThunk } from "store/DanhSachThanhVien";
import { getUserInfoLocal } from "utils";

const AccountUserTemplate = () => {
  const localUser = getUserInfoLocal();
  const dispatch = useAppDispatch();
  const { EditUser } = useSelector((state: RootState) => state.ListReducer);
  useEffect(() => {
    dispatch(EditUserThunk(localUser?.id));
  }, [dispatch, localUser.id]);
  return (
    <div className=" flex  justify-center mt-[150px]">
      <div className="account__bg"></div>
      <div className="account__container smM:!block">
        <div className="account__avatar">
          <div className="text-center flex-column align-items-center h-100 justify-content-center">
            <div className="d-flex justify-content-center py-2">
              <img
                src={EditUser?.avatar}
                alt=""
                width={200}
                height={200}
                className="rounded-[10px]"
              />
            </div>
            <div className="comments-name">{EditUser?.name}</div>
          </div>
        </div>
        <div className="px-[25px] mdM:px-[10px]">
          <Tabs
            tabPosition="top"
            items={[
              {
                key: "accountInfo",
                label: "Thông tin tài khoản",
                children: <AccountInfo />,
              },
              {
                key: "Lịch sử đặt phòng",
                label: "Lịch sử đặt phòng",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountUserTemplate;
