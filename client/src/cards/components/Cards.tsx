import React from "react";
import CardInterface from "../models/Interfaces/CardInterface";
import Card from "./card/Card";
import Grid from "@mui/material/Grid";

type Props = {
  cards: CardInterface[];
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
};

const Cards: React.FC<Props> = ({ cards, onDelete, onLike }) => {
  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card: CardInterface) => (
        <Grid item key={card._id} xs={12} sm={6} md={6} lg={4}>
          <Card card={card} onDelete={onDelete} onLike={onLike} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;

// import React from "react";
// import CardInterface from "../models/Interfaces/CardInterface";
// import Card from "./card/Card";
// import Grid from "@mui/material/Grid";

// type Props = {
//   cards: CardInterface[];
//   onDelete: (id: string) => void;
//   onLike: (id: string) => void;
// };

// const Cards: React.FC<Props> = ({ cards, onDelete, onLike }) => {
//   // אומר מה הולך להתקבל באובייקט הפרופס React.FC<Props>

//   // const handleCardDelete = (_id: string) =>
//   //   console.log("you deleted card number: " + _id);

//   // const handleCardLike = (_id: string) =>
//   //   console.log("you liked card number: " + _id);

//   // const handleCardEdit = (_id: string) =>
//   //   console.log("you edit card number: " + _id);

//   return (
//     <Grid container spacing={2} pb={2}>
//       {cards.map((card, _id) => (
//         <Grid item key={card._id} xs={12} sm={6} md={6} lg={4}>
//           <Card card={card} onDelete={onDelete} onLike={onLike} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default Cards;
