import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./Header";
import Map from "./Map";
import Overview from "./Overview";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="app-container">
        <Header />
        <Overview />
        <Map />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
