import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import { QueryClient, QueryClientProvider } from "react-query";

const Providers = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <ChakraProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default Providers;
