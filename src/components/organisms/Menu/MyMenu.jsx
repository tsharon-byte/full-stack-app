import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import Logo from "../../molecules/Logo";
import LoginModal from "../Login/LoginModal";
import LoginMenuItem from "../../molecules/LoginMenuItem";

const StyledNav = styled.nav`
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  height: 10vh;
  z-index: 10;
  position: relative;
`;
const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.textPrimary};
  &:hover {
    color: ${(props) => props.theme.primary};
    text-decoration: underline;
  }
  &.active {
    color: ${(props) => props.theme.primary};
    text-decoration: underline;
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
        <StyledLink to="/about" activeStyle>
          ABOUT
        </StyledLink>
        <StyledLink to="/" activeStyle exact>
          HOME
        </StyledLink>
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
