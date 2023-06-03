import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../../layout/components/NavItem";
import { Outlet } from "react-router-dom";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";

const PropsStringMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="child-props-string"
            to={SANDBOX_ROUTES.CHILD_PROPS_STRING}
            color="black"
          />
          <NavItem
            label="father-props-string"
            to={SANDBOX_ROUTES.FATHER_PROPS_STRING}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default PropsStringMenu;
