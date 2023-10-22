import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavBarLink from "./NavBarLink";

type Props = {
  label: string;
  to: string;
  color?: string;
};

const NavItem: React.FC<Props> = ({ label, to, color }) => {
  return (
    <NavBarLink to={to} color={color}>
      <Button color="inherit">
        <Typography style={{ fontSize: '1.5rem' }}>{label}</Typography>
      </Button>
    </NavBarLink>
  );
};

export default NavItem;

// export default NavItem;
