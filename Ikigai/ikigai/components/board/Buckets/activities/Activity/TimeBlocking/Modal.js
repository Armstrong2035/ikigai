import {
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
} from "@mui/material";
import TimeBlock from "./TimeBlocking";
import CloseIcon from "@mui/icons-material/Close";

export default function TimeBlockModal({
  setIsTimeblockOpen,
  isTimeblockOpen,
  activity,
}) {
  return (
    <Box>
      <Dialog
        open={isTimeblockOpen}
        sx={{
          "& .MuiDialog-paper": {
            width: { xs: "100%", sm: "80%" }, // Adjust dialog width for smaller screens
            maxHeight: "90vh", // Prevent the dialog from exceeding viewport height
            backgroundColor: "#191919",
            border: "1px solid white",
          },
        }}
      >
        <DialogTitle sx={{ color: "#CBD6D6" }}>
          {`Block some time for ${activity.title}`}
          <IconButton
            onClick={() => setIsTimeblockOpen(false)}
            sx={{
              color: "#CBD6D6",
              position: "absolute",
              right: "10px",
              top: "10px",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TimeBlock
            activity={activity}
            setIsTimeblockOpen={setIsTimeblockOpen}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
