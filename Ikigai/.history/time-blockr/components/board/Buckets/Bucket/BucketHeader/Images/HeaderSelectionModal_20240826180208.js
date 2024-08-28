// import React, { useState } from "react";
// import { Button } from "@mui/material";
// import UnsplashSearch from "./UnsplashSearch";

// const colors = [
//   "linear-gradient(to right, #ff7e5f, #feb47b)", // Warm sunset
//   "linear-gradient(to right, #00c6ff, #0072ff)", // Cool ocean
//   "linear-gradient(to right, #f7971e, #ffd200)", // Sunny day
//   "linear-gradient(to right, #00f260, #0575e6)", // Green-blue wave
//   "linear-gradient(to right, #e1eec3, #f05053)", // Soft morning
//   "linear-gradient(to right, #9CECFB, #65C7F7, #0052D4)", // Blue gradient
//   "linear-gradient(to right, #ffafbd, #ffc3a0)", // Peachy pink
//   "linear-gradient(to right, #43cea2, #185a9d)", // Green and blue gradient
//   "linear-gradient(to right, #f4e2d8, #ba5370)", // Pink and cream
//   "linear-gradient(to right, #8E2DE2, #4A00E0)", // Purple dusk
// ];

// export default function HeaderSelectionModal({ onClose, onHeaderChange }) {
//   const [showUnsplash, setShowUnsplash] = useState(false);

//   const handleGradientSelect = (gradient) => {
//     onHeaderChange(gradient);
//     onClose();
//   };

//   const handleUnsplashSelect = (imageUrl) => {
//     onHeaderChange(imageUrl);
//     onClose();
//   };

//   return (
//     <div className="modal" style>
//       <div className="color-list">
//         {colors.map((color, index) => (
//           <div
//             key={index}
//             className="color-option"
//             style={{
//               background: color, // Use background instead of color
//               width: "30px",
//               height: "30px",
//               border: "1px solid #ccc",
//               cursor: "pointer", // Makes it clear that it's clickable
//             }}
//             onClick={() => handleGradientSelect(color)} // Pass the correct variable
//           />
//         ))}
//       </div>

//       {!showUnsplash && (
//         <Button onClick={() => setShowUnsplash(true)}>
//           Search Unsplash Images
//         </Button>
//       )}

//       {showUnsplash && <UnsplashSearch onImageSelect={handleUnsplashSelect} />}

//       <Button onClick={onClose}>Close</Button>
//     </div>
//   );
// }
