import React from "react";
import { useCallback } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import useProjects from "../hooks/useProjects";
import ProjectsFeedback from "../components/ProjectsFeedback";

const FavProjectsPage = () => {
  const { value, ...rest } = useProjects();
  const { isLoading, error, filteredProject } = value;
  const { handleDeleteProject, handleGetFavProjects } = rest;
  useEffect(() => {
    handleGetFavProjects();
  }, []);
  const onDeleteProject = useCallback(
    async (projectId: string) => {
      await handleDeleteProject(projectId);
      await handleGetFavProjects();
    },
    [handleDeleteProject]
  );

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavProjects();
  }, []);

  return (
    <Container>
      <PageHeader
        title="my project "
        subtitle="Here you can find all your projects "
      />
      <ProjectsFeedback
        isLoading={isLoading}
        error={error}
        projects={filteredProject}
        onDelete={onDeleteProject}
        onLike={changeLikeStatus}
      />
    </Container>
  );
};

export default FavProjectsPage;
