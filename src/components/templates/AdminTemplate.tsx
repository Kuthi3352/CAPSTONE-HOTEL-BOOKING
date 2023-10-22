import { Tabs } from "components";
import { ListUser } from "./Account/ListUser";
import { Admin } from "./Account/TaoTK";
import styled from "styled-components";
import { LocationList, AddLocation } from "./Location";
import { AddRoom, RoomDS } from "./Room";

export const AdminTemplate = () => {
  return (    
      <Account className="no-header">
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
          ]}
        />
      </Account>
  );
};
const Account = styled.div`
  .ant-tabs-tab-btn {
    font-weight: 500;
    font-size: 15px;
  }
`;
