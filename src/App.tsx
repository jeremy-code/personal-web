import React from "react";
import { ChakraProvider, Flex, Image } from "@chakra-ui/react";

import theme from "utils/theme";
import { Navbar, Hero, Footer, Section, SplitSection } from "components/Layout";
import { CardStack, FlipCard } from "components/Card";
import { ABOUT_CARDS, SOCIAL_MEDIA } from "utils/const";
import { Carousel } from "components/Carousel";
import { ContactForm } from "features/Contact";
import { contactGraphic } from "assets";
import { SocialMediaButtonGroup } from "components/Misc";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero />
      <Section title="About" id="about">
        <CardStack>
          {ABOUT_CARDS.map((card) => (
            <FlipCard key={card.front.title} front={card.front} back={card.back} />
          ))}
        </CardStack>
      </Section>
      <Section title="Projects" id="projects">
        <Carousel />
      </Section>
      <SplitSection title="Contact" id="contact">
        <ContactForm />
        <Flex display={["none", null, "block"]}>
          <Image src={contactGraphic} maxW="sm" ml="auto" alt="Contact graphic" />
        </Flex>
      </SplitSection>
      <Section title="Social" id="social">
        <SocialMediaButtonGroup socialMedia={SOCIAL_MEDIA} />
      </Section>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
