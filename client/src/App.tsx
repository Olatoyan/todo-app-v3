import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Route, Routes, Navigate } from "react-router-dom";
import Todo from "./components/Todo";
import { TodoProvider } from "./contexts/todoContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Routes>
          <Route index element={<Navigate replace to="all" />} />
          <Route path="/" element={<Todo />} />
          <Route path="/:id" element={<Todo />} />
        </Routes>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#0c0e16",
            },
          }}
        />
      </TodoProvider>
    </QueryClientProvider>
  );
}

export default App;
