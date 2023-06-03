import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "./../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";

const Memoization = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="usecallback"
            to={SANDBOX_ROUTES.USECALLBACK_MENU}
            color="black"
          />
          <NavItem label="use memo" to={SANDBOX_ROUTES.USEMEMO} color="black" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Memoization;
