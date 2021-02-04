import React from "react";
import { Modal, Tabs } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { login } from "../../../redux/actions/auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const { TabPane } = Tabs;

const StyledTabs = styled(Tabs)`
  .ant-tabs-tab:hover {
    color: ${({ theme }) => theme.primary};
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.primary};
  }
  .ant-tabs-ink-bar {
    background: ${({ theme }) => theme.primary};
  }
`;
const StyledTabWrapper = styled.div`
  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    position: absolute;
    right: 0;
    left: 0;
    border: none;
    content: "";
  }
`;

const LoginModal = ({ isModalVisible, setIsModalVisible }) => {
  const dispatch = useDispatch();
  const handleOk = (data) => {
    dispatch(login(data));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        centered
        visible={isModalVisible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <StyledTabWrapper>
          <StyledTabs defaultActiveKey="1" centered>
            <TabPane tab="LOG IN" key="1">
              <LoginForm visible={isModalVisible} handleSubmit={handleOk} />
            </TabPane>
            <TabPane tab="SIGN UP" key="2">
              <RegisterForm visible={isModalVisible} handleSubmit={handleOk} />
            </TabPane>
          </StyledTabs>
        </StyledTabWrapper>
      </Modal>
    </>
  );
};

export default LoginModal;
