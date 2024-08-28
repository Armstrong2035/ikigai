const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const orientation = "landscape";
const perPage = 10;

export default async function searchImages(query) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&orientation=${landscape}&per_page=${50}`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching images:", error.message);
    return [];
  }
}
