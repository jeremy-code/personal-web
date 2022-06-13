import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "DM Sans, Roboto, sans-serif",
    body: "DM Sans, Roboto, sans-serif",
  },
  components: {
    Container: {
      baseStyle: {
        maxW: "container.lg",
      },
    },
  },
});

export default theme;
