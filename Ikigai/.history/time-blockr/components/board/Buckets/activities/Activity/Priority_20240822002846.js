import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import boardStore from "../../../store";

export default function Priority({ bucketId, activity }) {
  const setPriority = boardStore((state) => state.setPriority);

  const handlePriorityChange = (event) => {
    setPriority(bucketId, activity.id, event.target.value);
  };

  return (
    // <FormControl variant="filled" size="small" sx={{ m: 1, minWidth: 120 }}>
    <Select
      labelId={`priority-label-${activity.id}`}
      id={`priority-select-${activity.id}`}
      value={activity.priority || ""}
      label="Priority"
      onChange={handlePriorityChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value="low">Low</MenuItem>
      <MenuItem value="medium">Medium</MenuItem>
      <MenuItem value="high">High</MenuItem>
    </Select>
    // </FormControl>
  );
}
