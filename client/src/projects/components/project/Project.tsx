import React from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import ProjectHead from "./ProjectHead";
import ProjectBody from "./ProjectBody";
import ProjectActionBar from "./ProjectActionBar";
import { useNavigate, useLocation } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import ProjectInterface from "../../models/interfaces/ProjectInterface";
import { Typography } from "@mui/material";

type ProjectProps = {
  project: ProjectInterface;
  showDescription: boolean;
  onDelete: (id: string) => void;
  onLike: () => void;
  projectAbout?: any;
  showImage: boolean;
};
const Project: React.FC<ProjectProps> = ({
  project,
  onDelete,
  onLike,
  showDescription,
  showImage,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = `${ROUTES.PROJECT_DETAILS}/${project._id}`;

  const cardStyles = {
    width: "100%",
    height: "100%", 
    margin: "0",
    boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)", 
    borderRadius: "20px",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };

  const cursorStyle =
    location.pathname === `/${path}`
      ? { cursor: "default" }
      : { cursor: "pointer" };

  const handleClick = () => {
    if (!location.pathname.includes("project-info")) {
      navigate(path);
    }
  };
  return (
    <MuiCard sx={cardStyles}>
      <CardActionArea style={cursorStyle} onClick={handleClick}>
        <Typography>
          <ProjectHead imageUrl={project.imageUrl} showImage={showImage} />
        </Typography>
        <ProjectBody project={project} showDescription={showDescription} />
      </CardActionArea>
      <ProjectActionBar
        projectId={project._id}
        projectUserId={project.user_id}
        onDelete={onDelete}
        onLike={onLike}
        projectLikes={project.likes}
      />
    </MuiCard>
  );
};

export default Project;
