import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <div className="container">
      <h1>Mark's blog</h1>
      <p>Sharing my thoughts on tech and life in general</p>

      {posts.map(post => (
        <div key={post.id} className="card">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/post/${post.id}`}>Read more →</Link>
        </div>
      ))}
    </div>
  );
}