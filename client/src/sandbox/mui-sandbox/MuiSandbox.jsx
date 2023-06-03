import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../../layout/components/NavItem";
import { Outlet } from "react-router-dom";
import { SANDBOX_ROUTES } from "../../routes/routesModel";

const MuiSandbox = () => {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="data-display"
            to={SANDBOX_ROUTES.DATA_DISPLAY}
            color="black"
          />
          <NavItem label="layout" to={SANDBOX_ROUTES.LAYOUT} color="black" />
          <NavItem
            label="navigation"
            to={SANDBOX_ROUTES.NAVIGATION}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default MuiSandbox;
