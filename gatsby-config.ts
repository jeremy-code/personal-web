import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jeremy Nguyen's website`,
    author: {
      name: `Jeremy Nguyen`,
      summary: `who lives in San Diego and spends his time coding and building things.`,
    },
    description: `A personal website for Jeremy Nguyen to display his programming work and projects.`,
    siteUrl: `https://jeremynguyen.dev`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jeremy Nguyen's website",
        short_name: "Jeremy Nguyen",
        description:
          "Jeremy Nguyen's personal portfolio website for programming and software development projects",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0ea5e9",
        display: "minimal-ui",
        icon: "src/assets/icon.svg",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
  ],
};

export default config;
