import React from "react";
import Box from "@mui/material/Box";
import NavItem from "../../../components/NavItem";
import ROUTES from "../../../../routes/routesModel";

// קומפוננטה שאחראית על מה יוצג כאשר המשתמש לא מחובר
const NotLogged = () => {
  return (
    <Box>
      <NavItem label="signup" to={ROUTES.SIGNUP} />
      <NavItem label="login" to={ROUTES.LOGIN} />
    </Box>
  );
};

export default NotLogged;