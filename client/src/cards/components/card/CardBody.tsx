import React from "react";
import CardInterface from "../../models/Interfaces/CardInterface";
import CardHeader from "@mui/material/CardHeader";
import { Box, Divider } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardBodyRow from "./CardBodyRow";

type CardBodyProps = { card: CardInterface };

const CardBody: React.FC<CardBodyProps> = ({ card }) => {
  const { title, subtitle, address, phone, bizNumber } = card;
  const { city, houseNumber, street, country } = address;
  return (
    <CardContent sx={{ pb: 1 }}>
      <CardHeader title={title} subheader={subtitle} sx={{ p: 0, mb: 1 }} />

      <Divider />
      <Box mt={1}>
        <CardBodyRow title="Phone" content={phone} />
        <CardBodyRow
          title="Address"
          content={`${street} ${houseNumber} ${city} ${country}`}
        />
        <CardBodyRow title="Card Number" content={String(bizNumber)} />
      </Box>
    </CardContent>
  );
};

export default CardBody;
