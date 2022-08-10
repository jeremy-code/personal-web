import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jeremy Nguyen's website`,
    author: {
      name: `Jeremy Nguyen`,
      summary: `who lives in San Diego and spends his time coding and building things.`,
    },
    description: `Jeremy Nguyen's personal website. I'm a software developer who loves to build things.`,
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
        lang: "en",
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-5R1E1FJQ6H"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ],
};

export default config;
