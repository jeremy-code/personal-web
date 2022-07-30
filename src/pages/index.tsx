import { Box, Button, Flex } from "@chakra-ui/react";
import * as React from "react";

import { Layout, Hero, Section } from "../components/Layout";
import { Navbar } from "../components/Navbar";

import ABOUT_CARDS from "../../content/about-cards.json";
import { CardStack, FlipCard } from "../components/Card";
import { Carousel } from "../components/Carousel";
import { ContactForm } from "../components/Contact";
import { SocialMediaButtonGroup, SocialMediaProps } from "../components/Misc";

import SOCIAL_MEDIA from "../../content/social-media.json";

import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Section title="About" id="about">
        <CardStack>
          {ABOUT_CARDS.content.map((card) => (
            <FlipCard
              key={card.front.title}
              front={card.front}
              back={card.back}
            />
          ))}
        </CardStack>
      </Section>
      <Section title="Projects" id="projects">
        <Carousel />
      </Section>
      <Section variant="split" title="Contact" id="contact">
        <ContactForm />
        <Flex display={["none", null, "block"]}>
          <StaticImage
            src="../assets/contact-graphic.webp"
            alt="contact graphic"
            objectFit="contain"
          />
        </Flex>
      </Section>
      <Section title="Social" id="social">
        <SocialMediaButtonGroup socialMedia={SOCIAL_MEDIA.content} />
      </Section>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
