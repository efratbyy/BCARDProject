import React from "react";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../../layout/components/NavItem";
import { Outlet } from "react-router-dom";

const DataDisplayMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="mui-button"
            to={SANDBOX_ROUTES.MUI_BUTTON}
            color="black"
          />
          <NavItem
            label="mui-divider"
            to={SANDBOX_ROUTES.MUI_DIVIDER}
            color="black"
          />
          <NavItem
            label="mui-typography"
            to={SANDBOX_ROUTES.MUI_TYPOGRAPHY}
            color="black"
          />
          <NavItem
            label="snackbar"
            to={SANDBOX_ROUTES.SNACKBAR}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default DataDisplayMenu;
