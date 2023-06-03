import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

export const ContextMenuRouter = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="context menu"
            to={SANDBOX_ROUTES.ON_CLICK}
            color="black"
          />
          <NavItem
            label="name provider"
            to={SANDBOX_ROUTES.RAISING_EVENT}
            color="black"
          />
          <NavItem
            label="snack example"
            to={SANDBOX_ROUTES.RAISING_EVENT}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default ContextMenuRouter;
