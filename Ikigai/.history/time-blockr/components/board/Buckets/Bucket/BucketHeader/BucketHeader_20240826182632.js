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

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>

          <HeaderSelectionModal
            onClose={closeModal}
            onHeaderChange={onHeaderChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
