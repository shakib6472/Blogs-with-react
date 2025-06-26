import { useParams } from "react-router-dom";

function BlogDetails() {
  const { slug } = useParams(); // react-hooks
    // This will capture the dynamic segment of the URL, e.g., "react-hooks-1"

  return (
    <div>
      <h2>Blog Details</h2>
      <p>You opened: <strong>{slug}</strong></p>
    </div>
  );
}

export default BlogDetails;
