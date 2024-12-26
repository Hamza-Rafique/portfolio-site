import React from "react";
import { useQuery } from "react-query";

function Posts() {

  const { isLoading, error, data } = useQuery("posts", () =>
    axios
      .get("api/posts")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );
 
  return (
    <main>
      {isLoading ? (
        <div>Loading posts...</div>
      ) : error ? (
        <div>Error fetching posts: {error.message}</div>
      ) : (
        <div className="flex flex-wrap justify-around">
          {data.map((post) => (
            // eslint-disable-next-line react/jsx-key
            <article>
              <div className="max-w-sm rounded overflow-hidden shadow-lg mt-3 bg-white" key={post.id} >
                <img
                  src={post?.feature_image}
                  alt={post?.title}
                  className="w-full h-48 object-cover object-center"
                />

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{post?.title}</div>
                  <p className="text-gray-600 text-sm mb-4">
                    Published on{" "}
                    {new Date(post?.published_at).toLocaleDateString()} by{" "}
                    {post?.primary_author.name}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default Posts;
