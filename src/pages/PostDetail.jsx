import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container">
        <h2>Post not found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>← Back</button>
      <button onClick={() => navigate("/")}>Home</button>

      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}