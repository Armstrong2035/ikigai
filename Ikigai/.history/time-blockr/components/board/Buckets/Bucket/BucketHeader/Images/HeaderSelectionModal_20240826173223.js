import React, { useState } from "react";
import { Button } from "@mui/material";
import UnsplashSearch from "./UnsplashSearch";

const colors = [
  "red",
  "purple",
  "brown",
  "grey",
  "pink",
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
      <div className="color-list">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-option"
            style={{
              backgroundColor: color,
              width: "30px",
              height: "30px",
              border: "1px solid red",
            }}
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
