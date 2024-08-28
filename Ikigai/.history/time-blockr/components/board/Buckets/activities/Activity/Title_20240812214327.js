import { TextField } from "@mui/material";
import React from "react";
import boardStore from "../../../store";

export default function Title({ bucketId, activity }) {
  const [newTitle, setNewTitle] = useState("");

  const editActivity = useStore(boardStore, (state) => state.editActivity);

  const handleChange = () => {
    editActivity(bucketId, activity.id, newTitle);
  };

  return (
    <>
      <TextField
        value={title}
        type="text"
        placeholder="Activity title"
        required
        onChange={(e) => setNewTitle(e.target.value)}
      />
    </>
  );
}
