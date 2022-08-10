import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// hosts fonts locally for performance
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";

import { Footer } from "../Layout";
import theme from "../../utils/theme";
import "../../index.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
