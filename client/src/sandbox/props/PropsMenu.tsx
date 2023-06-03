import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const PropsMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="props-object"
            to={SANDBOX_ROUTES.PROPS_OBJECT}
            color="black"
          />
          <NavItem
            label="props-string"
            to={SANDBOX_ROUTES.PROPS_STRING}
            color="black"
          />
          <NavItem
            label="props-ts"
            to={SANDBOX_ROUTES.PROPS_TS}
            color="black"
          />
          <NavItem
            label="props-two-keys"
            to={SANDBOX_ROUTES.PROPS_TWO_KEYS}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default PropsMenu;
