import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { Container } from "@mui/material";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

type CardsPageProps = {};

const CardsPage: React.FC<CardsPageProps> = () => {
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

// import React, { useEffect } from "react";
// import PageHeader from "../../components/PageHeader";
// import { Container } from "@mui/material";
// import CardsFeedback from "../components/CardsFeedback";
// import useCards from "../hooks/useCards";

// type CardsPageProps = {};

// const CardsPage: React.FC<CardsPageProps> = () => {
//   const {
//     value,
//     handleGetCards,
//     handleDeleteCard,
//     handleLikeCard,
//   } = useCards(); // ייבוא הוק שיצרתי
//   const { filteredCards, error, isLoading } = value;

//   useEffect(() => {
//     // כי אנו רוצים להביא את הכרטיסים מהמאגר מידע רק פעם אחת useEffect-הכנסנו את הפונקציה ל
//     handleGetCards(); // useCards.ts-מטודה שייבאנו מ
//   }, []);

//   const onDeleteCard = async (cardId: string) => {
//     await handleDeleteCard(cardId);
//     await handleGetCards();
//   };

//   return (
//     <Container>
//       <PageHeader
//         title="Cards Page"
//         subtitle="Here you can find all types of business cards"
//       />

//       <CardsFeedback
//         isLoading={isLoading}
//         error={error}
//         cards={filteredCards}
//         onDelete={onDeleteCard}
//         onLike={handleLikeCard}
//       />
//     </Container>
//   );
// };

// export default CardsPage;
