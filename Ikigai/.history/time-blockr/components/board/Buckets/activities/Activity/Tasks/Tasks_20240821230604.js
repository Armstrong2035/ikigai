import {
  FormGroup,
  Stack,
  TextField,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import boardStore from "../../../../store";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';

export default function Tasks({ activity }) {
  const tasks = boardStore((state) => state.tasks);
  const updateTask = boardStore((state) => state.updateTask);
  const [editing, setEditing] = useState(true)
  const [title, setTitle] = useState("");

  return (
    <div>
      <Stack>
        {tasks
          .filter((task) => task.activityId === activity.id)
          .map((task) => (
            <TextField placeholder={task.title} disabled={!editing} />
            {editing? 

              <IconButton>
              <CheckIcon>
              </IconButton>
              
              : <IconButton>

              <EditIcon/>
             
              
              </IconButton>}
          ))}
      </Stack>
    </div>
  );
}
