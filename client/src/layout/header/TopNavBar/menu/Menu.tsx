import React from "react";
import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import MenuLink from "./MenuLink";
import { useUser } from "../../../../users/providers/UserProvider";
import useHandleUsers from "../../../../users/hooks/useHandleUsers";
import ROUTES from "../../../../routes/routesModel";

type Props = {
  isOpen: boolean;
  anchorEl: HTMLElement;
  onClose: () => void;
};

const Menu: React.FC<Props> = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useUser();
  const { handleLogout } = useHandleUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        <MenuLink
          label="about"
          navigateTo={ROUTES.ABOUT}
          onClick={onClose}
          styles={{ display: { xs: "block", md: "none" } }}
        />

        {user && user.isAdmin && (
          <MenuLink
            label="sandbox"
            navigateTo={ROUTES.SANDBOX}
            onClick={onClose}
          />
        )}

        {!user && (
          <>
            <MenuLink
              label="login"
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <MenuLink
              label="signup"
              navigateTo={ROUTES.SIGNUP}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}
        {user && (
          <>
            <MenuLink
              label="favorit cards"
              navigateTo={ROUTES.FAV_CARDS}
              onClick={onClose}
            />
            <MenuLink
              label="my cards"
              navigateTo={ROUTES.MY_CARDS}
              onClick={onClose}
            />
            <MenuLink
              label="edit account"
              navigateTo={`${ROUTES.EDIT_USER}/:id`}
              onClick={onClose}
            />

            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
