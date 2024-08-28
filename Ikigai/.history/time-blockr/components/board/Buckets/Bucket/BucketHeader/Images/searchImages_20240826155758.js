import { accessKey, secretKey } from "../../../../../../utils/unsplashConfig";

console.log(accessKey);

export default function searchImages(query) {
  const accessKey = process.env.ACCESS_KEY;
  const orientation = "landscape";
  const perPage = 10;

  fetch(
    `https://api.unsplash.com/search/photos?query=${query}&orientation=${orientation}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.results && data.results.length > 0) {
        console.log("Images found:", data.results);
      } else {
        console.log("No images found for the given query.");
      }
    })
    .catch((error) => {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    });
}
