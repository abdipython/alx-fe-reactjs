// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ✅ custom hook for auth state

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // If user not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the protected page
  return children;
}

