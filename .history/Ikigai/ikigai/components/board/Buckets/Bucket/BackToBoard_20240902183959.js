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
