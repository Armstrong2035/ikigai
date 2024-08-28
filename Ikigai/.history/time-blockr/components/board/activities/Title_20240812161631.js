import { TextField } from "@mui/material";
import React from "react";

export default function Title() {
  const [title, setTitle] = useState("");

  return (
    <>
      <TextField
        value={title}
        type="text"
        placeholder="Activity title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
}
