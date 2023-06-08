import React from "react";
import MuiCard from "@mui/material/Card";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardInterface from "../../models/Interfaces/CardInterface";
import CardActionBar from "./CardActionBar";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import CardDetailsBody from "../card/CardDetailsBody";

type Props = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
};
const BusinessCard: React.FC<Props> = ({ card, onDelete, onLike }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 280 }} square raised>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardDetailsBody card={card} />
      </CardActionArea>

      <CardActionBar
        cardId={card._id}
        onDelete={onDelete}
        onLike={onLike}
        cardUserId={card.user_id}
        cardLikes={card.likes}
        phoneNumber={card.phone}
      />
    </MuiCard>
  );
};

export default BusinessCard;
