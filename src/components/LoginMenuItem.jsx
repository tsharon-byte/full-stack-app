import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Button, Avatar, Popover } from "antd";
import { logout } from "../redux/actions/auth";
import { UserOutlined } from "@ant-design/icons";
const Wrapper = styled.div`
  .ant-popover-inner-content {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`;
const StyledMenuItem = styled.div`
  &:hover {
    color: #177ddc;
  }
`;
const LoginMenuItem = ({ isLogged, setIsModalVisible }) => {
  const dispatch = useDispatch();
  const content = (
    <Wrapper>
      <StyledMenuItem onClick={() => dispatch(logout())}>
        LOG OUT
      </StyledMenuItem>
    </Wrapper>
  );
  return (
    <>
      {!isLogged ? (
        <Button onClick={() => setIsModalVisible(true)}>LOG IN</Button>
      ) : (
        <Popover placement="bottomRight" content={content} trigger="click">
          <Avatar
            size="large"
            icon={<UserOutlined />}
            style={{ backgroundColor: "#177ddc" }}
          />
        </Popover>
      )}
    </>
  );
};
export default LoginMenuItem;
