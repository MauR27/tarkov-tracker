"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "var(--font-share)",
    body: "var(--font-share)",
  },
  styles: {
    global: {
      body: {
        bg: "#0C0C0C",
        color: "white",
        margin: 0,
        padding: 0,
        overflowY: "scroll",
        overflowX: "hidden",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      main: {
        minH: "100vh",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
