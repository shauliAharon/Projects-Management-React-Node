
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import ProjectInterface from "../models/interfaces/ProjectInterface";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Projects from "./Projects";

import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ScheduleIcon from "@mui/icons-material/Schedule";
type ProjectsFeedbackProps = {
  isLoading: boolean;
  error: string | null;
  projects: ProjectInterface[] | null;
  onDelete?: (id: string) => void;
  onLike: () => void | null | any;
};
const ProjectsFeedback: React.FC<ProjectsFeedbackProps> = ({
  isLoading,
  error,
  projects,
  onLike,
  onDelete = (projectId) => console.log("you deleted project: " + projectId),
}) => {
  const [sorting, setSorting] = useState<"asc" | "desc">("asc");
  const [sortedProjects, setSortedProjects] = useState<
    ProjectInterface[] | null
  >(null);
  const [timeSorting, setTimeSorting] = useState<"asc" | "desc">("asc");
  useEffect(() => {
    if (projects) {
      const sorted = sorting === "asc" ? "desc" : "asc";
      const sortedProjectsCopy = [...projects].sort((a, b) =>
        sorting === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );
      setSortedProjects(sortedProjectsCopy);
    }
  }, [projects, sorting]);
  useEffect(() => {
    if (projects) {
       const timeSorted = timeSorting === "asc" ? "desc" : "asc";
       const sortedProjectsCopy = [...projects].sort((a, b) => {
        const dateA = new Date(a.title).getTime();
        const dateB = new Date(b.title).getTime();

        if (timeSorted === "asc") {
          return dateA - dateB; 
        } else {
          return dateB - dateA;
        }
      });
      setSortedProjects(sortedProjectsCopy);
    }
  }, [projects, timeSorting]);

  const toggleSorting = () => {
    const sorted = sorting === "asc" ? "desc" : "asc";
    setSorting(sorted);
  };

  const toggleTimeSorting = () => {
    const timeSorted = timeSorting === "asc" ? "desc" : "asc";
    setTimeSorting(timeSorted);

    if (projects) {
      const sortedProjectsCopy = [...projects].sort((a, b) => {
        const dateA = new Date(a.title).getTime();
        const dateB = new Date(b.title).getTime();

        if (timeSorted === "asc") {
          return dateA - dateB; 
        } else {
          return dateB - dateA; 
        }
      });
      setSortedProjects(sortedProjectsCopy);
    }
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (projects && !projects.length) {
    return (
      <Typography variant="body1" color="initial">
        Oops, there are no projects in the database that match the
        parameters you entered!
      </Typography>
    );
  }

  return (
    <>
      <Button
        sx={{ m: 2 }}
        onClick={toggleSorting}
        variant="contained"
        color="primary"
        startIcon={
          sorting === "asc" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
        }
      >
        {sorting === "asc" ? "A-Z" : "Z-A"}
      </Button>
      <Button
        sx={{ m: 2 }}
        onClick={toggleTimeSorting}
        variant="contained"
        color="primary"
        startIcon={<ScheduleIcon />}
      >
        Uploaded recently
      </Button>

      {sortedProjects && sortedProjects.length && (
        <Projects
          Projects={sortedProjects}
          onDelete={onDelete}
          onLike={onLike}
        />
      )}
    </>
  );
};

ProjectsFeedback.defaultProps = {
  onLike: () => {},
};

export default ProjectsFeedback;


