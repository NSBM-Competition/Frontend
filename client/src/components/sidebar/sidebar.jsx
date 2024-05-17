import React, { useState, useEffect } from "react";
import "./sidebar.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { DashboardOutlined } from "@ant-design/icons";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
const { Header, Sider, Content } = Layout;

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menuItems = [
    { key: "1", icon: <DashboardOutlined />, label: "Dashboard", path: "/" },
    {
      key: "2",
      icon: <FontAwesomeIcon icon="fa-solid fa-user-plus" />,
      label: "Add Users",
      path: "/addUsers",
    },
    {
      key: "3",
      icon: <FontAwesomeIcon icon="fa-solid fa-user-pen" />,
      label: "Update Users",
      path: "/updateUsers",
    },
    {
      key: "4",
      icon: <FontAwesomeIcon icon="fa-solid fa-user" />,
      label: "Add Admin",
      path: "/addAdmin",
    },
    {
      key: "5",
      icon: <FontAwesomeIcon icon="fa-solid fa-user-gear" />,
      label: "Update Admin",
      path: "/updateAdmin",
    },

    {
      key: "6",
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      label: "Logout",
      path: "/login",
    },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const selectedKey = menuItems.find(
      (item) => item.path === currentPath
    )?.key;
    setSelectedKeys([selectedKey || "1"]);
  }, [location.pathname, menuItems]);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <h1 style={{ color: "white", textAlign: "center", padding: "15px" }}>
          Hello!
        </h1>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          style={{ height: "91.6vh", maskRepeat: "no-repeat" }}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon} className="menu-item">
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
