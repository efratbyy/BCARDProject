import React, { useCallback, useEffect } from "react";
import useCards from "../cards/hooks/useCards";
import { Container } from "@mui/material";
import PageHeader from "../components/PageHeader";
import CardsFeedback from "../cards/components/CardsFeedback";
import { useUser } from "../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";

const CardFavPage = () => {
  const { user } = useUser();
  if (!user) return <Navigate replace to={ROUTES.ROOT} />;
  const { value, ...rest } = useCards();
  const { isLoading, error, filteredCards } = value;
  const { handleGetFavCards, handleDeleteCard, handleLikeCard } = rest;

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const onDeleteCard = useCallback(
    async (cardId: string) => {
      await handleDeleteCard(cardId);
      await handleGetFavCards();
    },
    [handleDeleteCard]
  );

  const changeLikeStatus = useCallback(async (cardId: string) => {
    await handleLikeCard(cardId);
    await handleGetFavCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="My Favorite Cards Page"
        subtitle="Here you can find all your favorite business cards"
      />

      <CardsFeedback
        cards={filteredCards}
        error={error}
        isLoading={isLoading}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
};

export default CardFavPage;
