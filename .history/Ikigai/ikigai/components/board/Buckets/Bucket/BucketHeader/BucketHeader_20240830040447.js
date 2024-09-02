import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
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
    <div
      style={{
        backgroundImage: bucket.headerImage.startsWith("linear-gradient")
          ? bucket.headerImage
          : `url(${bucket.headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "150px",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
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
            "&:hover": {
              backgroundColor: "#2F2F2F", // Same hover color as the original
            },
          }}
        >
          Change Header
        </Button>
      </div>

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
