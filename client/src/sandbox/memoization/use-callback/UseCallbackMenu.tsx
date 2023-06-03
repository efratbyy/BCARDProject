import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";

export const UseCallbackMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="usecallback"
            to={SANDBOX_ROUTES.USECALLBACK}
            color="black"
          />
          <NavItem
            label="button comp"
            to={SANDBOX_ROUTES.BUTTON_COMP}
            color="black"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};
