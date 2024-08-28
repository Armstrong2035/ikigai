import React, { useState } from "react";
import { Button } from "@mui/material";
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
      <h2>{bucket.name}</h2>
      <Button
        onClick={openModal}
        sx={{ backgroundColor: "#2F2F2F", color: "#CBD6D6" }}
      >
        Change Header
      </Button>
      {isModalOpen && (
        <HeaderSelectionModal
          onClose={closeModal}
          onHeaderChange={onHeaderChange}
        />
      )}
    </div>
  );
}
