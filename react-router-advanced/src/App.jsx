// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";
import Profile from "./components/Profile";

// Simple BlogPost component for dynamic route
function BlogPost() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Blog Post</h2>
      <p className="mt-2 text-gray-700">
        This is a single blog post loaded via a dynamic route.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        {/* Navigation */}
        <nav className="mb-4 space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/posts" className="text-blue-600 hover:underline">
            Posts
          </Link>
          <Link to="/profile" className="text-blue-600 hover:underline">
            Profile
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<h1 className="text-2xl font-bold">Home</h1>} />
          <Route path="/posts" element={<PostsComponent />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/blog/:id" element={<BlogPost />} /> {/* ✅ Dynamic blog route */}
        </Routes>

