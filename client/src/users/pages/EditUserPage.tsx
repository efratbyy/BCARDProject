import React, { useEffect } from "react";
import { useUser } from "../providers/UserProvider";
import useHandleUsers from "../hooks/useHandleUsers";
import { Navigate, useNavigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import UserForm from "../components/UserForm";
import ROUTES from "../../routes/routesModel";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import userEditSchema from "../models/joi-schema/userEditSchema";
import mapUserToModel from "../helpers/normalization/mapUserToModel";

export const EditUserPage = () => {
  const { user, token } = useUser();
  const { handleGetUser, handelUpdateUser } = useHandleUsers();
  const navigate = useNavigate();
  const { value, ...rest } = useForm(
    initialSignupForm,
    userEditSchema,
    handelUpdateUser
  );
  const { data, errors } = value;
  const {
    handleInputChange,
    handleReset,
    onSubmit,
    validateForm,
    setData,
  } = rest;

  useEffect(() => {
    if (user)
      handleGetUser(user._id).then((userFromServer) => {
        if (user && user._id !== userFromServer!._id)
          return navigate(ROUTES.ROOT);
        if (userFromServer) {
          const modeledUser = mapUserToModel(userFromServer);
          setData(modeledUser);
        }
      });
  }, [user]);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        title="edit account"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleInputChange}
        data={data}
        setData={setData}
      />
    </Container>
  );
};

export default EditUserPage;
