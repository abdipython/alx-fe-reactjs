import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is a dynamic route displaying post with ID: {id}</p>
    </div>
  );
}

export default BlogPost;
