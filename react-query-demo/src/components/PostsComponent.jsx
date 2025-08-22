// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    isLoading,
    isError,
    data,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <ul className="space-y-2">
        {data.map((post) => (
          <li key={post.id} className="p-3 border rounded-lg shadow-sm">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
