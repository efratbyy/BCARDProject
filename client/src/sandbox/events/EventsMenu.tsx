import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const EventsMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="on click"
            to={SANDBOX_ROUTES.ON_CLICK}
            color="black"
          />
          <NavItem
            label="raising event"
            to={SANDBOX_ROUTES.RAISING_EVENT}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default EventsMenu;
