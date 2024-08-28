import React, { useState } from "react";
import { IconButton } from "@mui/material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Priority from "./Priority";
import DeleteIcon from "@mui/icons-material/Delete";
import AddLinkIcon from "@mui/icons-material/AddLink";
import boardStore from "../../../store";
import AddRelationships from "./AddRelationships";

export default function ActivityMenu({ activity }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [addRelationship, setAddRelationship] = useState(false);

  const deleteActivity = boardStore((state) => state.deleteActivity);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: "#CBD6D6" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          <Priority activity={activity} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton onClick={() => deleteActivity(activity.id)}>
            <DeleteIcon />
          </IconButton>
        </MenuItem>
        <MenuItem>
          {!addRelationship ? (
            <IconButton onClick={() => setAddRelationship(true)}>
              <AddLinkIcon />
            </IconButton>
          ) : (
            <AddRelationships activity={activity} />
          )}
        </MenuItem>
      </Menu>
    </div>
  );
}
