import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import LoginModal from "./modals/Login/LoginModal";
import { logout } from "../redux/actions/auth";
import LoginMenuItem from "../components/LoginMenuItem";

const StyledNav = styled.nav`
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  background-color: silver;
  height: 10vh;

  a:hover {
    background-color: aqua;
  }
`;
const MyMenu = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.loggedIn);
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <StyledNav>
        <Logo />
        <Link to="/about">ABOUT</Link>
        <Link to="/">HOME</Link>
        <LoginMenuItem
          isLogged={isLogged}
          setIsModalVisible={setIsModalVisible}
        />

        <LoginModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </StyledNav>
    </>
  );
};
export default MyMenu;
