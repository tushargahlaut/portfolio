import React, { useState } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { NavbarMenuItems } from "../../Utils/helper";
import Logo from "./../../Assets/images/logo/Logo.svg";
import "./../../Styles/Navbar.scss";

const { Header } = Layout;

const Navbar = () => {
  const [current, setCurrent] = useState("aboutme");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Layout>
      <Header className="navbar-header">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={NavbarMenuItems}
        />
      </Header>
    </Layout>
  );
};

export default Navbar;
