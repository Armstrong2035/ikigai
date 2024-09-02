import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Box,
} from "@mui/material";
import HeaderSelectionModal from "./Images/HeaderSelectionModal";
import DeleteIcon from "@mui/icons-material/Delete";
import boardStore from "../../../store";
import Link from "next/link";

export default function BucketHeader({ bucket, onHeaderChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteBucket = boardStore((state) => state.deleteBucket);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Box
      sx={{
        backgroundImage: bucket.headerImage.startsWith("linear-gradient")
          ? bucket.headerImage
          : `url(${bucket.headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: { xs: "100px", sm: "150px" }, // Adjust height for smaller screens
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: "flex",
          gap: 1, // Space between buttons
        }}
      >
        <Link href="/board">
          <IconButton onClick={() => deleteBucket(bucket.id)}>
            <DeleteIcon />
          </IconButton>
        </Link>
        <Button
          onClick={openModal}
          sx={{
            backgroundColor: "#2F2F2F",
            color: "#CBD6D6",
            borderRadius: "0px",
            padding: { xs: "4px 8px", sm: "6px 12px" }, // Adjust padding for smaller screens
            fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Responsive font size
            "&:hover": {
              backgroundColor: "#2F2F2F", // Same hover color as the original
            },
            sx={{ color: "#CBD6D6" }}
          }}
        >
          Change Header
        </Button>
      </Box>

      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: { xs: "100%", sm: "80%" }, // Adjust dialog width for smaller screens
            maxHeight: "90vh", // Prevent the dialog from exceeding viewport height
            backgroundColor: "#191919",
            border: "1px solid white",
          },
        }}
      >
        <DialogTitle sx={{ color: "#CBD6D6" }}>Select Header Image</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "#CBD6D6" }}>
            Select a header image
          </DialogContentText>
          <HeaderSelectionModal bucket={bucket} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
