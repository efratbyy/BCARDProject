import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";
import { Outlet } from "react-router-dom";

export const ComponentMenuContext = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="a" to={SANDBOX_ROUTES.A} color="black" />
          <NavItem label="b" to={SANDBOX_ROUTES.B} color="black" />
          <NavItem label="c" to={SANDBOX_ROUTES.C} color="black" />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default ComponentMenuContext;
