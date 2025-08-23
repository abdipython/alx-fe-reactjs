// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Basic Route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic Route Example */}
        <Route path="/post/:id" element={<BlogPost />} />

        {/* Nested + Protected (will refine later) */}
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


