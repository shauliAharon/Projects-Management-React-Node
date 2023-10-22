import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import NavItem from "../../../components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

const LeftNavBar = () => {
  const { user } = useUser();
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem to={ROUTES.ABOUT} label="about" />
        {user && <NavItem to={ROUTES.FAV_PROJECTS} label="my projects" />}
        {user?.isBusiness && (
          <NavItem to={ROUTES.MY_PROJECTS} label="Creating a project" />
        )}
        {user && user.isAdmin && (
          <NavItem to={ROUTES.SANDBOX} label="in development" />
        )}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
