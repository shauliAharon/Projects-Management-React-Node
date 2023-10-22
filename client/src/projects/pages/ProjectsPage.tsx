import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import ProjectsFeedback from "../components/ProjectsFeedback";
import PageHeader from "../../components/PageHeader";
import useProjects from "../hooks/useProjects";
import { Box } from "@mui/material";


type ProjectsPageProps = {};

const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  const { value, handleGetProjects, handleDeleteProject } = useProjects();
  const { filteredProject, error, isLoading } = value;
 

  
  useEffect(() => {
    handleGetProjects();
  }, []);

  const onDeleteProject = async (ProjectId: string) => {
    await handleDeleteProject(ProjectId);
    await handleGetProjects();
  };

  return (
    <Container>
      <PageHeader
        title="Select a project"
        subtitle="On this page you can find all Projects form all categories"
      />
      <Box sx={{ p: 1 }}>
        <ProjectsFeedback
          projects={filteredProject}
          error={error}
          isLoading={isLoading}
          onDelete={onDeleteProject}
          onLike={() => {}}
        />
      </Box>
    </Container>
  );
};

export default ProjectsPage;
