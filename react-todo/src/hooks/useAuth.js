import { useState } from "react";

export function useAuth() {
  const [isAuthenticated] = useState(true); // mock auth
  return { isAuthenticated };
}
