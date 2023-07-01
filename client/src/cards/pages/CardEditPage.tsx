import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import initialCreateCard from "../helpers/initialForms/initialCreateCard";
import cardEditSchema from "../models/joi/cardEditSchema";
import mapCardToModel from "../helpers/normalizations/mapCardToModel";
import CardForm from "../components/CardForm";

const CardEditPage = () => {
  const { user } = useUser();
  const { cardId } = useParams();
  const { handleGetCard, handleUpdateCard } = useCards();

  const navigate = useNavigate();

  const { value, ...rest } = useForm(
    initialCreateCard,
    cardEditSchema,
    handleUpdateCard
  );

  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, setData, validateForm } =
    rest;

  useEffect(() => {
    if (cardId)
      handleGetCard(cardId).then((cardFromServer) => {
        if (user && user._id !== cardFromServer!.user_id)
          return navigate(ROUTES.ROOT);
        const modeledCard = mapCardToModel(cardFromServer!);
        setData(modeledCard);
      });
  }, [cardId]);

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
      <CardForm
        title="edit card"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleInputChange}
        data={data}
      />
    </Container>
  );
};

export default CardEditPage;
