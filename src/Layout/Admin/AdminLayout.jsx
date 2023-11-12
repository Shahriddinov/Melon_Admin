import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Switch, theme } from "antd";
import Logo from "../../assets/images/l.svg";
import Search from "../../assets/images/search.svg";
import Notification from "../../assets/images/notifacition.svg";
import "./index.scss";
import { NavLink } from "react-router-dom";
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
export const AdminLayout = ({children}) => {
    const [themes, setTheme] = useState('light');
    const {
        token: { colorBgContainer },
    } = theme.useToken();

  const changeTheme = (value) => {
      console.log(value);
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <div className="learnCenter">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={{minHeight: '100vh', background:"white", padding: '0 24px', paddingBottom: '32px'}} 
        >
            <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%'}}>
                <div className="demo-logo-vertical" />
                <img className="learnCenter_logos" src={Logo} alt="" />
                <div style={{flexGrow: 1}}>
                    <Menu defaultSelectedKeys={["1"]}>
                        <Menu.Item key="/admin">
                        <NavLink to="/admin"><PieChartOutlined /> Ustozlar</NavLink>
                        </Menu.Item>
                        <Menu.Item key="learnCenter">
                            <NavLink to="/learnCenter"><DesktopOutlined /> O’quv markazi</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/allUser">
                            <NavLink to="/allUser"><TeamOutlined /> Foydalanuvchilar</NavLink>
                        </Menu.Item>
                        <Menu.Item key="/approvedUser">
                            <NavLink to="/approvedUser"><FileOutlined /> Tasdiqlangan foydalanuvchilar</NavLink>
                        </Menu.Item>
                    </Menu>
                </div>
                <div style={{minHeight: '5%'}}>
                    <div style={{width: '100%',display: 'flex', justifyContent: 'space-between', marginBottom: '25px'}}>
                        <p>{themes === 'light' ? "Qorong'i rejim": "Yo'rug' rejim"}</p> 
                        <Switch onChange={changeTheme} /> <br />
                    </div>
                    <p>Chiqish</p>
                </div>
            </div>  
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
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
