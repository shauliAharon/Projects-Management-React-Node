import React from "react";
import CardMedia from "@mui/material/CardMedia";


type ProjectHeadProps = {
  imageUrl: string;
  showImage:boolean;
};

const ProjectHead = ({ imageUrl,showImage}: ProjectHeadProps) => {
  return <>
  {showImage &&(<CardMedia component="img" image={imageUrl} height="194" alt={""} />)

  }
  
  </> 
};

export default ProjectHead;

