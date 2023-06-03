import React, { useCallback, useEffect } from "react";
import useCards from "../cards/hooks/useCards";
import { Container } from "@mui/material";
import PageHeader from "../components/PageHeader";
import CardsFeedback from "../cards/components/CardsFeedback";

const CardFavPage = () => {
  const { value, ...rest } = useCards();
  const { isLoading, error, filteredCards } = value;
  const { handleGetFavCards, handleDeleteCard } = rest;

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

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
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
