import { TextField } from "@mui/material";
import React from "react";

export default function Title() {
  const [title, setTitle] = useState("");

  return (
    <>
      <TextField value={title} onChange={(e) => e.target.value} />
    </>
  );
}
