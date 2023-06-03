import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const ComponentMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="logic" to={SANDBOX_ROUTES.LOGIC} color="black" />
          <NavItem
            label="string-int-demo"
            to={SANDBOX_ROUTES.STRING_INT}
            color="black"
          />
          <NavItem
            label="string-interpolation"
            to={SANDBOX_ROUTES.STRING_INTERPOLATION}
            color="black"
          />
          <NavItem
            label="template"
            to={SANDBOX_ROUTES.TEMPLATE}
            color="black"
          />
          <NavItem label="test" to={SANDBOX_ROUTES.TEST} color="black" />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default ComponentMenu;
