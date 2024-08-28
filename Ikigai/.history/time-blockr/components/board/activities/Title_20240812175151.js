import { TextField } from "@mui/material";
import React from "react";
import boardStore from "../store";

export default function Title({ title }) {
  const [newTitle, setNewTitle] = useState("");

  const editActivity = useStore(boardStore, (state) => state.editActivity);

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
