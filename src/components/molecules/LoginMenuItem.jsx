import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Avatar, Popover } from "antd";
import { logout } from "../../redux/actions/auth";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "../atoms";
const Wrapper = styled.div`
  .ant-popover-inner-content {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`;
const StyledMenuItem = styled.div`
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary};
  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.textPrimary};
  }
`;
const StyledAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.primary};
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
        <StyledButton onClick={() => setIsModalVisible(true)}>
          LOG IN
        </StyledButton>
      ) : (
        <Popover placement="bottomRight" content={content} trigger="click">
          <StyledAvatar size="large" icon={<UserOutlined />} />
        </Popover>
      )}
    </>
  );
};
export default LoginMenuItem;
