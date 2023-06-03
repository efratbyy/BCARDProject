import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const LifecycleMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="initial cycle"
            to={SANDBOX_ROUTES.INITIAL_CYCLE}
            color="black"
          />
          <NavItem
            label="lifecycle exe"
            to={SANDBOX_ROUTES.LIFECYCLE_EXE}
            color="black"
          />
          <NavItem
            label="useEffect - did mount"
            to={SANDBOX_ROUTES.USE_EFFECT_DID_MOUNT}
            color="black"
          />
          <NavItem
            label="useEffect - did update"
            to={SANDBOX_ROUTES.USE_EFFECT_DID_UPDATE}
            color="black"
          />
          <NavItem
            label="useEffect - will un mount"
            to={SANDBOX_ROUTES.USE_EFFECT_WILL_UNMOUNT}
            color="black"
          />
          <NavItem
            label="useEffect - no dependencies"
            to={SANDBOX_ROUTES.USE_EFFECT_NO_DEPENDENCIES}
            color="black"
          />
          <NavItem
            label="useState cycle"
            to={SANDBOX_ROUTES.USE_STATE_CYCLE}
            color="black"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default LifecycleMenu;
