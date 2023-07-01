import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { Container } from "@mui/material";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

type CardsPageProps = {};

const CardsPage: React.FC<CardsPageProps> = () => {
  const { user } = useUser();

  const { value, handleGetCards, handleDeleteCard, handleLikeCard } =
    useCards();
  const { filteredCards, error, isLoading } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId: string) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };
  if (!user) return <Navigate replace to={ROUTES.LOGIN} />;

  return (
    <Container>
      <PageHeader
        title="Cards Page"
        subtitle="Here you can find all types of business cards"
      />

      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filteredCards}
        onDelete={onDeleteCard}
        onLike={handleLikeCard}
      />
    </Container>
  );
};

export default CardsPage;
