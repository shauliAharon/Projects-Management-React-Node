import React from "react";
import Typography from "@mui/material/Typography";

type ProjectRowProps = {
  title: string;
  content: string;
  contentColor?: string;
  inBold?:boolean
};
const ProjectRow = ({ title, content, contentColor,inBold  }: ProjectRowProps) => {
  const contentStyle = {
    color: contentColor,
    fontWeight: inBold ? 500 : "inherit", 
  };
  return (
    <Typography sx={{fontFamily: "-moz-initial" ,justifyContent:"center"}}
      variant="body2"
      color="text.secondary"
    >
      <Typography sx={{fontFamily: "-moz-initial"}} fontWeight={700} component="span">
        {title}:
      </Typography>
      <span style={contentStyle}>{content}</span>
    </Typography>
  );
};

export default ProjectRow;
