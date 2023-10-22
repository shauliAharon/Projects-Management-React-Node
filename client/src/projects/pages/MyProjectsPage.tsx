import React, { useEffect } from "react";
import { useUser } from "../../users/providers/UserProvider";
import useProjects from "../hooks/useProjects";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import ProjectsFeedback from "../components/ProjectsFeedback";
import PageHeader from "../../components/PageHeader";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const MyProjectsPage = () => {
  const { user } = useUser();
  const { value, handleGetMyProjects, handleDeleteProject } = useProjects();
  const { projects, error, isLoading, filteredProject } = value;
  const navigate = useNavigate();

  useEffect(() => {
    handleGetMyProjects();
  }, []);

  const onDeleteProject = async (projectId: string) => {
    await handleDeleteProject(projectId);
    await handleGetMyProjects();
  };

  if (!user || !user.isBusiness)
    return <Navigate replace to={ROUTES.MY_PROJECTS} />;

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="Creating a project"
        subtitle="Here you can find your Creating a project "
      />

      {projects && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_PROJECT)}
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
      )}
      <ProjectsFeedback
        isLoading={isLoading}
        error={error}
        projects={filteredProject}
        onDelete={onDeleteProject}
        onLike={() => {}}
      />
    </Container>
  );
};

export default MyProjectsPage;
