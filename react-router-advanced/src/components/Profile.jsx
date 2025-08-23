// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PostsComponent from "./components/PostsComponent";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="p-6">
        {/* Simple Navbar */}
        <nav className="mb-6 space-x-4">
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
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsComponent />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
