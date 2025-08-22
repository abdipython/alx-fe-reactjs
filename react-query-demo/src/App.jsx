import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 16, display: "grid", gap: 12 }}>
        <h1>React Query Demo</h1>

        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setShowPosts((s) => !s)}>
            {showPosts ? "Unmount PostsComponent" : "Mount PostsComponent"}
          </button>
        </div>

        {showPosts && <PostsComponent />}

        {/* Optional Devtools (if installed) */}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </div>
    </QueryClientProvider>
  );
}

