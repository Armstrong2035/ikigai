import React, { useState, useEffect } from "react";
import searchImages from "./searchImages";
import Button from "@/components/ui/button";

function ImagePicker({ onImageSelect }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const results = await searchImages("your search query");
      setImages(results);
    }
    fetchImages();
  }, []);

  return (
    <>
      <Button>Change Header Image</Button>

      <div>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.thumb}
            alt={image.alt_description}
            onClick={() => onImageSelect(image.urls.regular)}
          />
        ))}
      </div>
    </>
  );
}

export default ImagePicker;
