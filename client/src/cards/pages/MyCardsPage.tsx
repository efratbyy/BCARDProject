import React, { useEffect } from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container, Fab } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import AddIcon from "@mui/icons-material/Add";
import CardsFeedback from "../components/CardsFeedback";

export const MyCardsPage = () => {
  const {
    handleGetMyCards,
    handleDeleteCard,
    handleLikeCard,
    value,
  } = useCards();
  const { isLoading, error, cards, filteredCards } = value;
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetMyCards();
  }, []);

  const onDeleteCard = async (cardId: string) => {
    await handleDeleteCard(cardId);
    await handleGetMyCards();
  };

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="My Cards Page"
        subtitle="Here you can find all your business cards"
      />

      {cards && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_CARD)}
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
      )}

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

// import React, { useEffect } from "react";
// import useCards from "../hooks/useCards";
// import { useUser } from "../../users/providers/UserProvider";
// import { Navigate, useNavigate } from "react-router-dom";
// import ROUTES from "../../routes/routesModel";
// import { Container, Fab } from "@mui/material";
// import PageHeader from "../../components/PageHeader";
// import AddIcon from "@mui/icons-material/Add";
// import CardsFeedback from "../components/CardsFeedback";

// export const MyCardsPage = () => {
//   const { handleGetMyCards, handleDeleteCard, handleLikeCard, value } =
//     useCards();
//   const { isLoading, error, cards, filteredCards } = value;
//   const { user } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     handleGetMyCards();
//   }, []);

//   const onDeleteCard = async (cardId: string) => {
//     await handleDeleteCard(cardId); // שולח בקשה לשרת למחיקת הכרטיס
//     await handleGetMyCards(); // שולח בקשה לשרת להבאת כל הכרטיסים שלי שמזהה לפי התוקן שמקושר ליוזר
//   };

//   if (!user || !user.isBusiness)
//     // MY_CARDS אז תראה לו את isBusiness אם אין יוזר והוא לא
//     return <Navigate replace to={ROUTES.CARDS} />;

//   return (
//     // :אחרת תציג לו
//     <Container sx={{ position: "relative", minHeight: "92vh" }}>
//       <PageHeader
//         title="My Cards Page"
//         subtitle="Here you can find all your business cards"
//       />

//       {cards && (
//         <Fab // mui קומפוננטה שעוטפת סוגים שונים של כפתורים מעוצבים של-Floating action button
//           onClick={() => navigate(ROUTES.CREATE_CARD)}
//           color="primary"
//           aria-label="add"
//           sx={{
//             position: "absolute",
//             bottom: 75,
//             right: 16,
//           }}
//         >
//           <AddIcon />
//         </Fab>
//       )}

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
