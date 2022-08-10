import React, { Suspense } from "react";
import { Flex, Skeleton, SimpleGrid } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

import { Layout, Hero, Section } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { FlipCard } from "../components/Card";
import { ContactForm } from "../components/Contact";
import { SocialMediaButtonGroup, Seo } from "../components/Misc";
const Carousel = React.lazy(() => import("../components/Carousel/Carousel"));

import ABOUT_CARDS from "../../content/about-cards.json";
import SOCIAL_MEDIA from "../../content/social-media.json";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Section title="About" id="about">
        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          {ABOUT_CARDS.content.map((card) => (
            <FlipCard
              key={card.front.title}
              front={card.front}
              back={card.back}
            />
          ))}
        </SimpleGrid>
      </Section>
      <Section title="Projects" id="projects">
        <Suspense fallback={<Skeleton />}>
          <Carousel />
        </Suspense>
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
