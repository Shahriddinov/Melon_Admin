import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Logo from "../../../assets/images/l.svg";
import Search from "../../../assets/images/search.svg";
import Notification from "../../../assets/images/notifacition.svg";
import "./AdminLayout.scss";
import { NavLink } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const AdminLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="learnCenter">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          style={{ background: "white" }}
          collapsible
          collapsed={collapsed}
        >
          <div className="demo-logo-vertical" />
          <img className="learnCenter_logos" src={Logo} alt="" />
          <Menu defaultSelectedKeys={["1"]}>
            <Menu.Item key="/admin/Teacher">
                <NavLink to="/admin/Teacher"><PieChartOutlined /> Ustozlar</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/learnCenter">
                <NavLink to="/admin/learnCenter"><DesktopOutlined /> O’quv markazi</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/Teacher">
                <NavLink to="/admin/allUser"><TeamOutlined /> Foydalanuvchilar</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/Teacher">
                <NavLink to="/admin/Teacher"><FileOutlined /> Tasdiqlangan foydalanuvchilar</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background: "white",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 20px",
            }}
          >
            <div className="learnCenter_search">
              <img src={Search} alt="" />
              <input
                className="learnCenter_search_write"
                type="text"
                placeholder="User, Ustoz...."
              />
            </div>
            <div className="learnCenter_notification">
              Ru
              <img src={Notification} alt="" />
            </div>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              {/*<Breadcrumb.Item>User</Breadcrumb.Item>*/}
              {/*<Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
                {children}
            </div>
          </Content>
          {/*<Footer*/}
          {/*    style={{*/}
          {/*        textAlign: 'center',*/}
          {/*    }}*/}
          {/*>*/}
          {/*    Ant Design ©2023 Created by Ant UED*/}
          {/*</Footer>*/}
        </Layout>
      </Layout>
    </div>
  );
};
export default AdminLayout;
