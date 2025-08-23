// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import added

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsComponent />} />
        
        {/* Protected Profile Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
