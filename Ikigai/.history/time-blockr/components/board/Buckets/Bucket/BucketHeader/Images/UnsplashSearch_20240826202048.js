import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import searchImages from "./searchImages";
import boardStore from "../../../../store";
export default function UnsplashSearch({ bucket }) {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    const results = await searchImages(query);
    setImages(results);
  };
  const updateBucketHeader = boardStore((state) => state.updateBucketHeader);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
      />
      <Button onClick={handleSearch}>Search</Button>

      <Grid container spacing={1} sx={{ p: 2 }}>
        {images.map((image, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <img
              key={image.id}
              src={image.urls.thumb}
              alt={image.alt_description}
              onClick={() => updateBucketHeader(bucket.id, image.urls.thumb)}
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
