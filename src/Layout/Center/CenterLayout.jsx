import React, { useState } from 'react';
import { Layout, Menu, theme, Switch } from 'antd';
import {
    UserOutlined,
    MessageOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/images/l.svg";

const { Header, Content, Sider } = Layout;

export const CenterLayout = ({children}) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [themes, setTheme] = useState('light');
    const changeTheme = (value) => {
        console.log(value);
      setTheme(value ? 'dark' : 'light');
    };

    return <Layout style={{ minHeight: '100vh' }}>  
    <Sider style={{background:"white", padding: '0 24px', display: 'flex'}}>
        <div>
            <img className="learnCenter_logos " src={Logo} alt="site logo" style={{padding: '36px 0'}}/>
            <hr style={{backgroundColor: '#F1F1F4'}}/>
            <span style={{margin: '30px 0', display: 'inline-block'}}>user panel</span>
            <Menu  defaultSelectedKeys={['1']} >
                <Menu.Item key="/center">
                    <NavLink to="/center"><UserOutlined /> Profile</NavLink>
                </Menu.Item>
                <Menu.Item key="chat">
                    <NavLink to="/chat"><MessageOutlined /> Chat</NavLink>
                </Menu.Item>
            </Menu> 
        </div>
        <div style={{width: '100%',display: 'flex', justifyContent: 'space-between', marginBottom: '25px'}}>
            <p>{themes === 'light' ? "Qorong'i rejim": "Yo'rug' rejim"}</p> 
            <Switch onChange={changeTheme} /> <br />
        </div>
        <p>Chiqish</p>
    </Sider>  
    <Layout>
        <Header style={{
            background: "white",
            display:"flex",
            justifyContent:"space-between",
            alignItems: 'center',
            padding:"36px 23px",
        }}>
            <div>
                <p style={{
                    margin: 0,
                    padding: '0 20px'
                }}>Bosh sahifa</p>
            </div>
        </Header>
        <Content style={{margin: '24px', background: colorBgContainer, borderRadius: '14px'}}>
            <div style={{ minHeight: 360,}}>{children}</div>
        </Content>
    </Layout>               
    </Layout> 
}
