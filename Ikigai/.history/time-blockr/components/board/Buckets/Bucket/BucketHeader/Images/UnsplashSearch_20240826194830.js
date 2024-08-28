import React, { useState } from "react";
import Button from "@/components/ui/button";
import searchImages from "./searchImages";

export default function UnsplashSearch() {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const results = await searchImages(query);
    setImages(results);
  };

  return (
    <div>
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
          />
        ))}
      </div>
    </div>
  );
}
