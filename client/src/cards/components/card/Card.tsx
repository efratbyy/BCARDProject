import React from "react";
import MuiCard from "@mui/material/Card";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardInterface from "../../models/Interfaces/CardInterface";
import CardActionBar from "./CardActionBar";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

type Props = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
};
const Card: React.FC<Props> = ({ card, onDelete, onLike }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 280 }} square raised>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar
        cardId={card._id}
        onDelete={onDelete}
        onLike={onLike}
        cardUserId={card.user_id}
        cardLikes={card.likes}
      />
    </MuiCard>
  );
};

export default Card;

// import React from "react";
// import MuiCard from "@mui/material/Card";
// import CardHead from "./CardHead";
// import CardBody from "./CardBody";
// import CardInterface from "../../models/Interfaces/CardInterface";
// import CardActionBar from "./CardActionBar";
// import CardActionArea from "@mui/material/CardActionArea";
// import { useNavigate } from "react-router-dom";
// import ROUTES from "../../../routes/routesModel";

// type Props = {
//   card: CardInterface;
//   onDelete: (id: string) => void;
//   onLike: (id: string) => void;
// };
// const Card: React.FC<Props> = ({ card, onDelete, onLike }) => {
//   const navigate = useNavigate();

//   return (
//     <MuiCard
//       sx={{ minWidth: 280 }}
//       square
//       raised
//       // מעגל את פינות הכרטיס square
//       // מבטל את הצל של הכרטיס variant="outlined"
//       // מגדיל את הצל של הכרטיס raised
//     >
//       <CardActionArea
//         // זה שאם לוחצים על כרטיס ספציפי הוא יחליף את שורת הכתובת למה שאגיד לו Card תפקידו של
//         onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)} // Router שורה זו משפיעה על שורה 20 בקומפוננטה
//         // Router-פה קובעת מה מעבירה ל
//         // של הכרטיס id-והערך נוצר פה בשורת הכתובת-ה Router נוצר בקומפוננטה cardId פה קובעת את הערכים של המפתחות. המפתח
//         // url-תואם למה שמופיע בכתובת ה id-יפנה אותי לכרטיס ספציפי שה
//       >
//         <CardHead image={card.image} />
//         <CardBody card={card} />
//       </CardActionArea>

//       <CardActionBar
//         cardId={card._id}
//         onDelete={onDelete}
//         onLike={onLike}
//         cardUserId={card.user_id}
//         cardLikes={card.likes}
//       />
//     </MuiCard>
//   );
// };

// export default Card;
