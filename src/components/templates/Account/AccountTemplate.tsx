import { Tabs } from "components";
// import { AccountUser } from ".";
import { ListUser } from "./ListUser";
import { Admin } from "./Admin";
import styled from "styled-components";
// import AccountUser from "./AccountUser";

export const AccountTemplate = () => {
  return (
    <Account>
      <Tabs
        className="pt-20 "
        tabPosition="left"
        items={[
          // {
          //   key: "accountInfo",
          //   label: "Thông tin tài khoản",
          //   children: <AccountUser />,
          // },
          {
            key: "listUsers",
            label: "Danh sách tài khoản",
            children: <ListUser />,
          },
          {
            key: "ADMIN",
            label: "Tạo tài khoản",
            children: <Admin />,
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
