import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";
import PortraitIcon from "@mui/icons-material/Portrait";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
         
          label="About"
          icon={<InfoIcon color="primary"/>}
          onClick={() => navigate(ROUTES.ABOUT)}
        />

        {user && (
          <BottomNavigationAction
            label="my project"
            icon={<FavoriteIcon color="primary" />}
            onClick={() => navigate(ROUTES.FAV_PROJECTS)}
          />
        )}

        {user && user.isBusiness && (
          <BottomNavigationAction
            label="Creating a project"
            icon={<PortraitIcon color="primary" />}
            onClick={() => navigate(ROUTES.MY_PROJECTS)}
          />
        )}
            <BottomNavigationAction
          label="Contact Us"
          icon={<EmailIcon color="primary" />}
          onClick={() => navigate(ROUTES.CONTACTUS)}
        />
     
      </BottomNavigation>
      
    </Paper>
  );
};

export default Footer;
