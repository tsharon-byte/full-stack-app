import React from "react";
import * as Yup from "yup";
import { Button, Input, Space, Card, message } from "antd";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
const Error = styled.div`
  color: indianred;
  text-align: start;
`;
const Elem = styled.div`
  height: 80px;
`;
const StyledCard = styled(Card)`
  width: 450px;
`;
const Wrapper = styled.div`
  height: 350px;
`;
const LoginForm = ({ visible, handleSubmit }) => (
  <Wrapper>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(data) => {
        const response = fetch("/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data),
        })
          .then((result) => result.json())
          .then((responseData) => {
            message.info("User login successful");
            handleSubmit(responseData);
          })
          .catch((error) => {
            message.error(error.message || "An error occured");
          });
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form>
          <Space direction="vertical">
            <StyledCard>
              <Elem>
                <label htmlFor="email">Email Address</label>
                <Field name="email" placeholder="Enter email" as={Input} />
                <Error>{touched.email && errors.email}</Error>
              </Elem>
              <Elem>
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  as={Input.Password}
                  placeholder="Enter password"
                />
                <Error>{touched.password && errors.password}</Error>
              </Elem>
              <Button onClick={handleSubmit} type="primary">
                LOG IN
              </Button>
            </StyledCard>
          </Space>
        </Form>
      )}
    </Formik>
  </Wrapper>
);

export default LoginForm;
