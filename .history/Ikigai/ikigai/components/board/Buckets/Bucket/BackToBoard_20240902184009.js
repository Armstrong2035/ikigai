import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Link from "next/link";

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
