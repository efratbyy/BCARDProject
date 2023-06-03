import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const UseStateMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="SetPost" to={SANDBOX_ROUTES.SET_POST} color="black" />
          <NavItem
            label="useState"
            to={SANDBOX_ROUTES.USE_STATE}
            color="black"
          />
          <NavItem
            label="use state with array of objects"
            to={SANDBOX_ROUTES.USE_STATE_ARRAY_OF_OBJECT}
            color="black"
          />
          <NavItem
            label="use state with complex object"
            to={SANDBOX_ROUTES.USE_STATE_COMPLEX_OBJECT}
            color="black"
          />
          <NavItem
            label="use state with function"
            to={SANDBOX_ROUTES.USE_STATE_FUNCTION}
            color="black"
          />
          <NavItem
            label="use state with object"
            to={SANDBOX_ROUTES.USE_STATE_OBJECT}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
export default UseStateMenu;
