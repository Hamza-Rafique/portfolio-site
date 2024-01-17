import axios from "axios";

export async function fetchPostBySlug(slug) {
  const response = await axios.get(
    `https://api.your-blog-data.com/posts/${slug}`
  );
  return response.data;
}

export const postData = {
  title: "Exploring the Hidden Gems of Iceland's Landscape",
  author: "John Smith",
  categories: ["Travel", "Photography", "Nature"],
  content: `
    `,
  images: [
    "/images/jokulsarlon-glacier-lagoon.jpg",
    "/images/reykjadalur-hot-spring-river.jpg",
    "/images/landmannalaugar-geothermal-area.jpg",
    "/images/westfjords-fishing-village.jpg",
    "/images/detifoss-waterfall.jpg",
  ],
};