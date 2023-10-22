import Box from "@mui/material/Box";
import NavItem from "../../../components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { colors } from "material-ui/styles";

const NotLogged = () => {
  return (
    <Box color={"inherit"}>
      <NavItem label="signup" to={ROUTES.SIGNUP} />
      <NavItem label="login" to={ROUTES.LOGIN} />
    </Box>
  );
};

export default NotLogged;
