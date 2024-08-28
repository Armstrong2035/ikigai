import React from "react";
import { Select, MenuItem } from "@mui/material";
import boardStore from "../../../store";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

export default function Priority({ bucketId, activity }) {
  const setPriority = boardStore((state) => state.setPriority);

  const handlePriorityChange = (event) => {
    setPriority(bucketId, activity.id, event.target.value);
  };

  return (
    <Select
      value={activity.priority || ""}
      onChange={handlePriorityChange}
      IconComponent={ArrowDropDownCircleIcon}
      displayEmpty
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value="low">Low</MenuItem>
      <MenuItem value="medium">Medium</MenuItem>
      <MenuItem value="high">High</MenuItem>
    </Select>
  );
}
