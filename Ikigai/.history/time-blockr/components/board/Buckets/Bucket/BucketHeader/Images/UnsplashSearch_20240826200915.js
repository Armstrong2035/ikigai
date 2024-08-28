import React, { useState } from "react";
import { Button } from "@mui/material";
import searchImages from "./searchImages";
export default function UnsplashSearch() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

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

      {/* <div className="image-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.thumb}
            alt={image.alt_description}
          />
        ))}
      </div> */}

      <Grid container spacing={1} sx={{ p: 2 }}>
        {images.map((image, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <img
              key={image.id}
              src={image.urls.thumb}
              alt={image.alt_description}
              style={{
                cursor: "pointer",
                width: "100%",
                height: "100px",
                borderRadius: "8px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
