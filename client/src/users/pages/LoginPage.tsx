import React from "react";
import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useHandleUsers from "../hooks/useHandleUsers";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import FormLink from "../../forms/components/FormLink";
import { useUser } from "../providers/UserProvider";

const LoginPage = () => {
  const { user } = useUser();
  const { handleLogin } = useHandleUsers();

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  if (user) return <Navigate to={ROUTES.ROOT} />;

  return (
    <Container
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="login"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        styles={{ maxWidth: "450px" }}
        spacing={1}
        onFormChange={rest.validateForm}
        to={ROUTES.CARDS}
      >
        <Input
          label="email"
          name="email"
          type="email"
          data={value.data}
          error={value.errors.email}
          onInputChange={rest.handleInputChange}
        />
        <Input
          label="password"
          name="password"
          type="password"
          data={value.data}
          error={value.errors.password}
          onInputChange={rest.handleInputChange}
        />
        <FormLink text="Not registered yet?" to={ROUTES.SIGNUP} />
      </Form>
    </Container>
  );
};

export default LoginPage;
