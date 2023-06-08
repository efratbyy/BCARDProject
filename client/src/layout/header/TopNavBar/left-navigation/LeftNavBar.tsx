import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import NavItem from "../../../components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

const LeftNavBar = () => {
  const { user } = useUser();

  return (
    <Box>
      <LogoIcon
      // הלוגו שמופיע מצד שמאל של תפריט הניווט שיופיע רק במסכים בינוניים ומעלה
      />
      <Logo
      // הלוגו שמופיע מצד שמאל של תפריט הניווט שיופיע רק במסכים קטנים
      />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem label="about" to={ROUTES.ABOUT} />

        {user && user.isBusiness && (
          <NavItem label="My Cards" to={ROUTES.MY_CARDS} />
        )}

        {user && <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} />}

        {user && user.isAdmin && (
          <NavItem label="Sandbox" to={ROUTES.SANDBOX} />
        )}
      </Box>
    </Box>
  );
};

export default LeftNavBar;