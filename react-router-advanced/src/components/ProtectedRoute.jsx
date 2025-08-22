import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // fake auth check (later connect to real auth)
  return localStorage.getItem("auth") === "true";
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
