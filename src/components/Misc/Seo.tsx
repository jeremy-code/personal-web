import React from "react";
import { useStaticQuery, graphql } from "gatsby";

type SeoProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const Seo = ({ title, description, children }: SeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content="https://www.jeremynguyen.dev" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/43259194?s=48&v=4"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  );
};

export default Seo;
