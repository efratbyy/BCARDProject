import React, { useEffect } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import Card from "../components/card/Card";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

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
        <div>Details of card: {cardId}</div> <br />
        <Card
          card={value.card}
          onDelete={handleDeleteCard}
          onLike={handleLikeCard}
        />
      </Container>
    );
  return null;
};

export default CardDetailsPage;

// import React, { useEffect } from "react";
// import { Container } from "@mui/material";
// import PageHeader from "../../components/PageHeader";
// import { useParams } from "react-router-dom";
// import Card from "../components/card/Card";
// import useCards from "../hooks/useCards";
// import Spinner from "../../components/Spinner";
// import Error from "../../components/Error";

// const CardDetailsPage = () => {
//   const { cardId } = useParams(); // בעזרת הוק זה צורכת נתונים
//   // const { cardID } = useParams(); // דרך נוספת לכתיבה
//   // Card ואת הערכים קובעים בקומפוננטת Router את המפתחות קובעים בקומפונננטת
//   // הנוכחית url-מחזיר אובייקט שמכיל את הפרמטרים של כתובת ה useParams
//   const { value, handleGetCard, handleDeleteCard, handleLikeCard } = useCards();

//   useEffect(() => {
//     if (cardId) handleGetCard(cardId);
//   }, []);

//   if (value.isLoading) return <Spinner />;
//   if (value.error) return <Error errorMessage={value.error} />;
//   if (!value.isLoading && !value.card) return <p>No card to display...</p>;
//   if (!value.isLoading && value.card)
//     return (
//       <Container>
//         <PageHeader
//           title="Business Details "
//           subtitle="Here you can see details of the business"
//         />
//         <div>Details of card: {cardId}</div> <br />
//         <Card
//           card={value.card}
//           onDelete={handleDeleteCard}
//           onLike={handleLikeCard}
//         />
//       </Container>
//     );
//   return null;
// };

// export default CardDetailsPage;
