import React from "react";
import useProjects from "../hooks/useProjects";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import Container from "@mui/material/Container";
import ProjectForm from "../components/ProjectForm";
import projectSchema from "../models/Joi/projectSchema";
import initialCreateProjectObject from "../helpers/initialForms/initialCreateProjectObject";


const CreateProjectPage = () => {
  const { handleCreateProject } = useProjects();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCreateProjectObject,
    projectSchema,
    handleCreateProject
  );
  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, validateForm } = rest;
  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProjectForm
        title="create Project"
        data={data}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleInputChange}
        onReset={handleReset}
        onSubmit={onSubmit}
      />
    </Container>
  );
};

export default CreateProjectPage;
