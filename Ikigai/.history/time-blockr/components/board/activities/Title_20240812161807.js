import { TextField } from "@mui/material";
import React from "react";

export default function Title({ title }) {
  const [newTitle, setNewTitle] = useState("");

  const updateTitle = () => {
    title(newTitle);
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
