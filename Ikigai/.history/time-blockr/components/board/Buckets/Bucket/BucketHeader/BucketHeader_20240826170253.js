import React, { useState } from "react";
import Button from "@/components/ui/button";
import HeaderSelectionModal from "./HeaderSelectionModal";

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
      }}
    >
      <h2>{bucket.name}</h2>
      <Button onClick={openModal}>Change Header</Button>
      {isModalOpen && (
        <HeaderSelectionModal
          onClose={closeModal}
          onHeaderChange={onHeaderChange}
        />
      )}
    </div>
  );
}
