import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Project from "../components/project/Project";


const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const { value, handleGetProject } = useProjects();
  const { project, error, isLoading } = value;

  useEffect(() => {
    if (projectId) handleGetProject(projectId);
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoading && !project) return <p>No Project to display...</p>;
  if (!isLoading && project)
    return (
      <Container
        sx={{
          pb: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PageHeader
          title="Project details"
          subtitle="Here you can see details about the project"
        />

        <Project
          project={project}
          showDescription
          onDelete={(id) => console.log("you deleted Project: " + id)}
          onLike={() => {}}
          showImage={false}
        />
      </Container>
    );
  return null;
};

export default ProjectDetailsPage;
