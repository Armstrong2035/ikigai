import React, { useState } from "react";
import Button from "@/components/ui/button";
import searchImages from "./searchImages";

export default function UnsplashSearch({ onImageSelect }) {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    const results = await searchImages(query);
    setImages(results);
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
      />
      <Button onClick={handleSearch}>Search</Button>

      <div className="image-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.thumb}
            alt={image.alt_description}
            onClick={() => onImageSelect(image.urls.regular)}
          />
        ))}
      </div>
    </div>
  );
}
