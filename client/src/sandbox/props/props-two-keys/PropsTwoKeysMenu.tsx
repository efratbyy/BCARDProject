import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../../layout/components/NavItem";
import { Outlet } from "react-router-dom";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";

const PropsTwoKeysMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="child-props-two-keys"
            to={SANDBOX_ROUTES.CHILD_PROPS_TWO_KEYS}
            color="black"
          />
          <NavItem
            label="father-props-two-keys"
            to={SANDBOX_ROUTES.FATHER_PROPS_TWO_KEYS}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default PropsTwoKeysMenu;
