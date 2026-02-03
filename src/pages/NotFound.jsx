import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <h1>404</h1>
      <p>The page you’re looking for does not exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}