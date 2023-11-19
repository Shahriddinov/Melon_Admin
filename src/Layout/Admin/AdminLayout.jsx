import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined 
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Switch, theme } from "antd";
import Logo from "../../assets/images/l.svg";
import Search from "../../assets/images/search.svg";
import Notification from "../../assets/images/notifacition.svg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux-toolkit/authSlice/authSlice";
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { searchContext } from "../../context/SearchContext/SearchContext";
import LogoutIcon from "../../assets/images/log-out.svg"
import LightIcon from "../../assets/images/light.svg"
import "./index.scss";
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _, setSearch } = useContext(searchContext)
  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  const [themes, setTheme] = useState('light');
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <div className="learnCenter">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={'250px'}
          style={{ minHeight: '100vh', background: "white", padding: '0 24px', paddingBottom: '32px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%' }}>
            <div className="demo-logo-vertical" />
            <img className="learnCenter_logo" width={87} height={30} src={Logo} alt="site logo" style={{margin: '30px 0'}} />
            <div style={{ flexGrow: 1, borderTop: '1px solid #ccc' }}>
              <Menu defaultSelectedKeys={["1"]} >
                <p className="sidebar-title">admin panel</p>
                <Menu.Item key="admin" >
                  <NavLink to="admin"><PieChartOutlined /> Ustozlar</NavLink>
                </Menu.Item>
                <Menu.Item key="center">
                  <NavLink to="center"><DesktopOutlined /> O’quv markazi</NavLink>
                </Menu.Item>
                <p className="sidebar-title">Arizalar</p>
                <Menu.Item key="alluser">
                  <NavLink to="alluser"><UserOutlined /> Userlar</NavLink>
                </Menu.Item>
                <Menu.Item key="appeals">
                  <NavLink to="appeals"><TeamOutlined /> Tasdiqlangan Userlar</NavLink>
                </Menu.Item>
                <p className="sidebar-title">Xabarnoma</p>
                <Menu.Item key="message">
                  <NavLink to="message"><TeamOutlined /> Xabarnoma</NavLink>
                </Menu.Item>
              </Menu>
            </div>
            <div style={{ minHeight: '5%' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <img src={LightIcon} alt="" />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <p className="thema-text">{themes === 'light' ? "Qorong'i rejim" : "Yo'rug' rejim"}</p>
                  <Switch onChange={changeTheme} /> <br />
                </div>
              </div>
              <div className="sidebar-butttom">
                <img src={LogoutIcon} alt="" />
                <button className="logout-btn" onClick={handleLogout}>Chiqish</button>
              </div>
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
                onChange={(e) => setSearch(e.target.value)}
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
