import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  content: ReactNode;
};

const CardBodyRow: React.FC<Props> = ({ title, content }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      <Typography fontWeight={700} component="span">
        {title}:{" "}
      </Typography>
      {content}
    </Typography>
  );
};

export default CardBodyRow;
