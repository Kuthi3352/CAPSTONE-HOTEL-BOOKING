import { BinhLuanList, Tabs } from "components";
import { ListUser } from "./Account/ListUser";
import { Admin } from "./Account/TaoTK";
import styled from "styled-components";
import { LocationList, AddLocation } from "./Location";
import { AddRoom, RoomDS } from "./Room";
import { ConfigProvider } from "antd";

export const AdminTemplate = () => {
  return (
    <Account className="no-header mt-5">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "#333",
              itemHoverColor: "#ff385c",
              itemSelectedColor:"#f8103a"
            },
          },
        }}
      >
        <Tabs
          className="pt-20 "
          tabPosition="left"
          items={[
            {
              key: "listUsers",
              label: "Danh sách tài khoản",
              children: <ListUser />,
            },
            {
              key: "AddlistUsers",
              label: "Tạo tài khoản",
              children: <Admin />,
            },
            {
              key: "Location",
              label: "Danh Sách Địa Điểm",
              children: <LocationList />,
            },
            {
              key: "AddLocation",
              label: "Thêm địa điểm",
              children: <AddLocation />,
            },
            {
              key: "Room",
              label: "RoomList",
              children: <RoomDS />,
            },
            {
              key: "AddRoom",
              label: "Thêm Phòng",
              children: <AddRoom />,
            },
            {
              key: "BinhLuan",
              label: "Danh sách những người bình luận",
              children: <BinhLuanList />,
            },
          ]}
        />

      </ConfigProvider>
    </Account>
  );
};
const Account = styled.div`
  .ant-tabs-tab-btn {
    font-weight: 500;
    font-size: 15px;
  }
`;
