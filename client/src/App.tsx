import TodoContainer from "./components/TodoContainer";

import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    // <div className="flex justify-center items-center flex-col">
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Header />
      <TodoContainer />
    </QueryClientProvider>
    // </div>
  );
}

export default App;
