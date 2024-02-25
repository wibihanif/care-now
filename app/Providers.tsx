"use client";

import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
};

const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#F8C1D3",
      200: "#E73872",
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </QueryClientProvider>
  );
}
