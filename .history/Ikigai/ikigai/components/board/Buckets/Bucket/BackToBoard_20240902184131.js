import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Link from "next/link";
import { IconButton } from "@mui/material";

export default function BackToBoard() {
  return (
    <>
      <Link href={`/board`}>
        <IconButton sx={{ color: "#CBD6D6" }}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </Link>
    </>
  );
}
