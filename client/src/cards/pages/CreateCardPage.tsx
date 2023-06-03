import React from "react";
import { useUser } from "../../users/providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import { Navigate } from "react-router-dom";
import useCards from "../hooks/useCards";
import cardSchema from "../models/joi/cardSchema";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import CardForm from "../components/CardForm";
import initialCreateCard from "../helpers/initialForms/initialCreateCard";

export const CreateCardPage = () => {
  const { handleCreateCard } = useCards();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCreateCard,
    cardSchema,
    handleCreateCard
  );

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="Create your business card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleInputChange}
        data={value.data}
        errors={value.errors}
      />
    </Container>
  );
};

export default CreateCardPage;
