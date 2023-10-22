import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";

type PageHeaderProps = { title: string; subtitle: string };

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "20px",
        borderRadius: "10px",
   color:"-moz-initial" 
      }}
    >
      <Typography sx={{fontFamily: "-moz-initial"}} variant="h2" component="h1">
        {title}
      </Typography>
      <Typography sx={{fontFamily: "-moz-initial"}} variant="h5" component="h2">
        {subtitle}
      </Typography>
      <Divider
        sx={{
          backgroundColor: "#fff",
          margin: "10px auto 0",
          width: "50%",
        }}
      />
    </Box>
  );
};

export default PageHeader;
