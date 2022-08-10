import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0D9CDE",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
  },
  fonts: {
    heading: `DM Sans, ${base.fonts?.heading}`,
    body: `DM Sans, ${base.fonts?.body}`,
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
