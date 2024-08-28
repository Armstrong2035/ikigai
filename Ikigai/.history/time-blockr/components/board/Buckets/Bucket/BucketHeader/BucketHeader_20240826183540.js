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
          : `url(${bucket.headerImage})`,
        width: "100%",
        height: "100px",
      }}
    >
      <Button
        onClick={openModal}
        sx={{
          backgroundColor: "#2F2F2F",
          color: "#CBD6D6",
          borderRadius: "0px",
          "&:hover": {
            backgroundColor: "#2F2F2F", // Change this to your desired hover color
          },
        }}
      >
        Change Header
      </Button>

      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>Select a header image</DialogContentText>

          <HeaderSelectionModal />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
