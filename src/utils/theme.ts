import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        maxW: "container.lg",
      },
    },
  },
});

export default theme;
