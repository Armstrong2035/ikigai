import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import HeaderSelectionModal from "./Images/HeaderSelectionModal";

export default function BucketHeader({ bucket, onHeaderChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      style={{
        backgroundImage: bucket.headerImage.startsWith("linear-gradient")
          ? bucket.headerImage
          : `url(${bucket.headerImage})`, // Ensure this uses the higher resolution image
        backgroundSize: "fill", // Cover the entire div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // No repetition of image
        width: "100%",
        height: "150px", // Height for the header
        position: "relative", // Positioning for button
      }}
    >
      <Button
        onClick={openModal}
        sx={{
          position: "absolute",
          bottom: "10px", // Position the button near the bottom of the header
          left: "10px", // Add some padding from the left edge
          backgroundColor: "#2F2F2F",
          color: "#CBD6D6",
          borderRadius: "0px",
          "&:hover": {
            backgroundColor: "#2F2F2F", // Same hover color as the original
          },
        }}
      >
        Change Header
      </Button>

      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        maxWidth="lg"
        fullWidth
        sx={{ height: "100%" }}
      >
        <DialogTitle>Select Header Image</DialogTitle>
        <DialogContent>
          <DialogContentText>Select a header image</DialogContentText>
          <HeaderSelectionModal bucket={bucket} />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
