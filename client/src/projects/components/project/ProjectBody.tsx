import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Divider, Box, Typography } from "@mui/material";
import ProjectRow from "./ProjectRow";
import ProjectInterface from "../../models/interfaces/ProjectInterface";

type ProjectBodyProps = {
  project: ProjectInterface;
  showDescription: boolean;
};

const ProjectBody = ({ project, showDescription }: ProjectBodyProps) => {
  const [timeLeftToDueDate, setTimeLeftToDueDate] = useState<string>("");

  useEffect(() => {
    const updateInterval = setInterval(() => {
      const formattedDueDate = project.dueDate.split("-").reverse().join("-");
      const timeLeft =
        new Date(formattedDueDate).getTime() - new Date().getTime();

      let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      let hoursLeft = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setTimeLeftToDueDate(
        `Days: ${daysLeft}, Hours: ${hoursLeft}, Minutes: ${minutesLeft}, Seconds: ${secondsLeft}`
      );
    }, 1000);

    return () => {
      clearInterval(updateInterval);
    };
  }, []);

  return (
    <CardContent>
      <CardHeader
        sx={{ pb: 1, textAlign: "center" }}
        title={
          <Typography
            variant="h4"
            component="div"
            sx={{ fontFamily: "-moz-initial" }}
          >
            {project.title}
          </Typography>
        }
        subheader={
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontFamily: "-moz-initial" }}
          >
            {project.subtitle}
          </Typography>
        }
      />

      <Divider />

      <Box mt={1}>
        <ProjectRow title="Title" content={project.title} />
        <ProjectRow title="Subtitle" content={project.subtitle} />
        <ProjectRow title="mission Mode" content={project.missionMode} />

        <ProjectRow
          title="Deadline"
          content={String(project.dueDate)}
          contentColor="red"
        />

        {showDescription && (
          <>
            <ProjectRow title="phone" content={project.phone} />
            <ProjectRow title="email" content={project.email} />
            <ProjectRow title="web" content={project.webUrl} />
            <ProjectRow
              title="Project Number"
              content={String(project.projectNumber)}
            />
            <ProjectRow
              title="Countdown"
              content={timeLeftToDueDate}
              contentColor="red"
              inBold
            />
            <Divider />
            <Typography variant="h5" sx={{ m: 2, textAlign: "center" }}>
              Description
            </Typography>
            <Typography variant="body1">{project.description}</Typography>
          </>
        )}
      </Box>
    </CardContent>
  );
};

export default ProjectBody;
