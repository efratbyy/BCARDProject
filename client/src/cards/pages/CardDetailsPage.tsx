import React, { useEffect } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import BusinessCard from "../components/card/BusinessCard";

const CardDetailsPage = () => {
  const { cardId } = useParams();
  const { value, handleGetCard, handleDeleteCard, handleLikeCard } = useCards();

  useEffect(() => {
    if (cardId) handleGetCard(cardId);
  }, []);

  if (value.isLoading) return <Spinner />;
  if (value.error) return <Error errorMessage={value.error} />;
  if (!value.isLoading && !value.card) return <p>No card to display...</p>;
  if (!value.isLoading && value.card)
    return (
      <Container>
        <PageHeader
          title="Business Details "
          subtitle="Here you can see details of the business"
        />
        <div>
          <h1>Details of business: {value.card.title}</h1>
        </div>{" "}
        <br />
        <BusinessCard
          card={value.card}
          onDelete={handleDeleteCard}
          onLike={handleLikeCard}
        />
      </Container>
    );
  return null;
};

export default CardDetailsPage;
