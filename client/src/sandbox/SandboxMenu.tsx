import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../routes/routesModel";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../users/providers/UserProvider";
import ROUTES from "../routes/routesModel";

const SandboxMenu = () => {
  const { user } = useUser();

  if (!user || !user.isAdmin) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="component"
            to={SANDBOX_ROUTES.COMPONENT}
            color="black"
          />
          <NavItem
            label="conditional-rendering"
            to={SANDBOX_ROUTES.CONDITIONAL_RENDERING}
            color="black"
          />
          <NavItem
            label="custom-hooks"
            to={SANDBOX_ROUTES.CUSTOM_HOOKS}
            color="black"
          />
          <NavItem label="events" to={SANDBOX_ROUTES.EVENTS} color="black" />
          <NavItem
            label="introduction"
            to={SANDBOX_ROUTES.INTRODUCTION}
            color="black"
          />
          <NavItem
            label="iteration"
            to={SANDBOX_ROUTES.ITERATIONS}
            color="black"
          />
          <NavItem
            label="lifecycle-hooks"
            to={SANDBOX_ROUTES.LIFECYCLE_MENU}
            color="black"
          />
          <NavItem
            label="mui-sandbox"
            to={SANDBOX_ROUTES.MUI_SANDBOX}
            color="black"
          />

          <NavItem label="props" to={SANDBOX_ROUTES.PROPS} color="black" />
          <NavItem
            label="use-state"
            to={SANDBOX_ROUTES.USE_STATE_MENU}
            color="black"
          />
          <NavItem label="form" to={SANDBOX_ROUTES.FORM} color="black" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default SandboxMenu;
