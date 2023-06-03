import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../layout/components/NavItem";
import { Outlet } from "react-router-dom";
import { SANDBOX_ROUTES } from "../../routes/routesModel";

const CustomHooksMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="custom name"
            to={SANDBOX_ROUTES.CUSTOM_NAME}
            color="black"
          />
          <NavItem
            label="Custom Counter Hook"
            to={SANDBOX_ROUTES.CUSTOM_COUNTER_HOOK}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default CustomHooksMenu;
