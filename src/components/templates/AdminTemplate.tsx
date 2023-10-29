import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AuditOutlined,
  UserOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  FileSyncOutlined,
} from "@ant-design/icons";
import { Menu, theme, Layout, ConfigProvider } from "antd";
import { Button } from "components";
import { PATH } from "constant";
import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];
const { Header, Sider, Content } = Layout;
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Quản lý thành viên", "sub1", <UserOutlined />, [
    getItem(<NavLink to={PATH.listUser}>Danh sách thành viên</NavLink>, "1"),
    getItem(<NavLink to={PATH.addUser}>Thêm thành viên</NavLink>, "2"),
  ]),
  getItem("Quản lý vị trí", "sub2", <EnvironmentOutlined />, [
    getItem(<NavLink to={PATH.locationList}>Danh sách vị trí</NavLink>, "3"),
    getItem(<NavLink to={PATH.addLocation}>Thêm vị trí</NavLink>, "4"),
  ]),
  getItem("Quản lý phòng", "sub3", <HomeOutlined />, [
    getItem(<NavLink to={PATH.roomDs}>Danh sách phòng</NavLink>, "5"),
    getItem(<NavLink to={PATH.addRoom}>Thêm phòng</NavLink>, "6"),
  ]),
  getItem("Quản lý bình luận", "sub4", <AuditOutlined />, [
    getItem(<NavLink to={PATH.commentList}>Danh sách bình luận</NavLink>, "7"),
  ]),
  getItem("Quản lý đặt phòng", "sub5", <FileSyncOutlined />, [
    getItem(<NavLink to={PATH.datPhongList}>Danh sách đặt phòng</NavLink>, "8"),
    getItem(
      <NavLink to={PATH.addDatPhong}>Thêm chi tiết đặt phòng</NavLink>,
      "9"
    ),
  ]),
];
export const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            triggerBg: "#ff385c",
          },
        },
      }}
    >
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={!collapsed}
          width="250px"
          theme="light"
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, color: "#eee", background: "#ff385c" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                color: "#eee",
              }}
              className="xsM:!text-[12px]"
            />
            Quản Trị Viên
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
