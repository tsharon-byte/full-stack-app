import React from "react";
import * as Yup from "yup";
import { message } from "antd";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { Button, Input } from "../../atoms";
const Error = styled.div`
  color: indianred;
  text-align: start;
`;
const Elem = styled.div`
  height: 80px;
`;
const StyledCard = styled.div`
  width: 450px;
`;
const Wrapper = styled.div`
  height: 350px;
`;
const RegisterForm = ({ visible, handleSubmit }) => (
  <Wrapper>
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={Yup.object({
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Required"),
      })}
      onSubmit={(data) => {
        const response = fetch("/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data),
        })
          .then((result) => result.json())
          .then((responseData) => {
            if (responseData.error) {
              message.error(responseData.error);
            } else {
              message.info("User created successfully");
              handleSubmit(responseData);
            }
          })
          .catch((error) => {
            message.error(error || "An error occured");
          });
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form>
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
            <Elem>
              <label htmlFor="confirmPassword">Confirm password</label>
              <Field
                name="confirmPassword"
                as={Input.Password}
                placeholder="Confirm password"
              />
              <Error>{touched.confirmPassword && errors.confirmPassword}</Error>
            </Elem>
            <Button onClick={handleSubmit} type="primary">
              REGISTER
            </Button>
          </StyledCard>
        </Form>
      )}
    </Formik>
  </Wrapper>
);

export default RegisterForm;
