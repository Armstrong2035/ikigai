import { accessKey, secretKey } from "../../../../../../utils/unsplashConfig";

export default function searchImages(query) {
  const accessKey = "YOUR_UNSPLASH_ACCESS_KEY";
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
    .catch((error) => {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    });
}
