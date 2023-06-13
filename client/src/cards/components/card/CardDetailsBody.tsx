import React from "react";
import CardInterface from "../../models/Interfaces/CardInterface";
import CardHeader from "@mui/material/CardHeader";
import { Box, Divider } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardBodyRow from "./CardBodyRow";
import { Link } from "react-router-dom";

type CardBodyProps = { card: CardInterface };

const CardDetailsBody: React.FC<CardBodyProps> = ({ card }) => {
  const {
    title,
    subtitle,
    description,
    email,
    address,
    phone,
    bizNumber,
    web,
    createdAt,
  } = card;
  const { city, houseNumber, street, country, zip } = address;
  return (
    <CardContent sx={{ pb: 1 }}>
      <CardHeader title={title} subheader={subtitle} sx={{ p: 0, mb: 1 }} />

      <Divider />
      <Box mt={1}>
        <CardBodyRow
          title="Phone"
          content={<Link to={`tel:${phone}`}>{phone}</Link>}
        />
        <CardBodyRow
          title="Address"
          content={`${street} ${houseNumber} ${city} ${zip}${country}`}
        />
        <CardBodyRow
          title="Email"
          content={<Link to={`mailto:${email}`}>{email}</Link>}
        />
        <CardBodyRow
          title="Web"
          content={
            <Link to={`${web}`} target="_blank">
              {web}
            </Link>
          }
        />
        <CardBodyRow title="Description" content={description} />
        <CardBodyRow title="Created at" content={String(createdAt)} />
        <CardBodyRow title="Card Number" content={String(bizNumber)} />
      </Box>
    </CardContent>
  );
};

export default CardDetailsBody;
