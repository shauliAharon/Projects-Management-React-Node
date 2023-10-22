import React from "react";
import Grid from "@mui/material/Grid";
import Project from "./project/Project";
import ProjectInterface from "../models/interfaces/ProjectInterface";

type ProjectsProps = {
  Projects: ProjectInterface[];
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Projects: React.FC<ProjectsProps> = ({ Projects, onDelete, onLike }) => {
  return (
    <Grid  container spacing={2} pb={2}>
      {Projects.map((project) => (
        <Grid  item key={project._id} xs={12} sm={6} md={4} lg={3}>
          <Project
            project={project}
            onDelete={onDelete}
            onLike={onLike}
            showDescription={false}
            showImage={true}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
