import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useUser } from "../../../users/providers/UserProvider";
import ProjectDeleteDialog from "./ProjectDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import ProjectInterface from "../../models/interfaces/ProjectInterface";
import useProjects from "../../hooks/useProjects";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";


type ProjectActionBarProps = {
  projectUserId: string;
  projectId: string;
  onDelete: (id: string) => void;
  onLike: () => void;
  projectLikes: ProjectInterface[] | any | string[];
};
const ProjectActionBar = ({
  projectId,
  projectUserId,
  projectLikes,
  onDelete,
  onLike,
}: ProjectActionBarProps) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { handleLikeProject } = useProjects();

  const [isDialogOpen, setDialog] = useState(false);

  const [isLike, setLike] = useState(() => {
    if (!user) return false;
    return !!projectLikes.find((id: any) => id === user._id);
  });

  const handleLike = async () => {
    setLike((prev) => !prev);
    await handleLikeProject(projectId);
    onLike();
  };

  const handleDialog = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteProject = () => {
    handleDialog();
    onDelete(projectId);
  };

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}
      >
        <Box>
          {user && (user._id === projectUserId || user.isAdmin) && (
            <IconButton
              aria-label="delete project"
              onClick={() => handleDialog("open")}
            >
              <DeleteIcon />
            </IconButton>
          )}

          {(user?._id === projectUserId && user?.isBusiness) && (
            <IconButton
              aria-label="edit project"
              onClick={() => navigate(`${ROUTES.EDIT_PROJECT}/${projectId}`)}
            >
              <EditIcon />
            </IconButton>
          )}
        </Box>
        {user && (
          <Box>
            <IconButton aria-label="add to fav" onClick={handleLike}>
              <Box sx={{ fontSize: "18px", fontFamily: "-moz-initial" }}>
              Select
              
              </Box>
              <SwitchAccountIcon
                sx={{ ml: 1 }}
                color={isLike ? "primary" : "inherit"}
              />
            </IconButton>
          </Box>
        )}
      </CardActions>
      <ProjectDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteProject}
      />
    </>
  );
};

export default React.memo(ProjectActionBar);
