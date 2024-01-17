import axios from "axios";

export async function fetchSimilarPosts(categories) {
  const response = await axios.get(
    `https://api.your-blog-data.com/posts?categories=${categories.join(",")}`
  );
  return response.data;
}
