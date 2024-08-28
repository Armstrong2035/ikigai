import React, { useState } from "react";
import { Button } from "@mui/material";
import UnsplashSearch from "./UnsplashSearch";

const gradients = [
  "linear-gradient(to right, #ff9966, #ff5e62)",
  "linear-gradient(to right, #7F7FD5, #86A8E7, #91EAE4)",
  "linear-gradient(to right, #654ea3, #eaafc8)",
  // Add more gradients as needed
];

export default function HeaderSelectionModal({ onClose, onHeaderChange }) {
  const [showUnsplash, setShowUnsplash] = useState(false);

  const handleGradientSelect = (gradient) => {
    onHeaderChange(gradient);
    onClose();
  };

  const handleUnsplashSelect = (imageUrl) => {
    onHeaderChange(imageUrl);
    onClose();
  };

  return (
    <div className="modal">
      <div className="gradient-list">
        {gradients.map((gradient, index) => (
          <div
            key={index}
            className="gradient-option"
            style={{ backgroundColor: gradient, width: "30px", height: "30px" }}
            onClick={() => handleGradientSelect(gradient)}
          />
        ))}
      </div>

      {!showUnsplash && (
        <>
          <Button onClick={() => setShowUnsplash(true)}>
            Search Unsplash Images
          </Button>
        </>
      )}

      {showUnsplash && <UnsplashSearch onImageSelect={handleUnsplashSelect} />}

      <Button onClick={onClose}>Close</Button>
    </div>
  );
}
