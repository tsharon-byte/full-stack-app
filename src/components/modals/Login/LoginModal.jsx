import React from "react";
import { Modal, Tabs } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { login } from "../../../redux/actions/auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const { TabPane } = Tabs;

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
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="LOG IN" key="1">
            <LoginForm visible={isModalVisible} handleSubmit={handleOk} />
          </TabPane>
          <TabPane tab="SIGN UP" key="2">
            <RegisterForm visible={isModalVisible} handleSubmit={handleOk} />
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default LoginModal;
