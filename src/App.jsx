import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ContextProvider } from "./context/context";

import Header from "./components/Header";
import Map from "./components/Map";
import Overview from "./components/Overview";

const queryClient = new QueryClient();

function App() {
  return (
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <main className="app-container">
          <Header />
          <Overview />
          <Map />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ContextProvider>
  );
}

export default App;
