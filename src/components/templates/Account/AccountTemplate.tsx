import { Tabs } from "components";
import { AccountUser } from ".";

export const AccountTemplate = () => {
  return (
    <Tabs
      className="pt-20"
      tabPosition="top"
      items={[
        {
          key: "accountInfo",
          label: "Thông tin tài khoản",
          children: <AccountUser />,
        },
      ]}
    />
  );
};
