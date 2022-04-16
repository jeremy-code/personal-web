import React from "react";
import { ChakraProvider, Flex, Image } from "@chakra-ui/react";

import theme from "utils/theme";
import { Navbar, Hero, Footer, Section, SplitSection } from "components/Layout";
import { ABOUT_CARDS } from "utils/const";
import { contactGraphic } from "assets";
import { ContactForm } from "features/Contact";
import { CardStack, AnimatedCard } from "components/Card";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero />
      <Section title="About" id="about">
        <CardStack>
          {ABOUT_CARDS.map((card) => (
            <AnimatedCard front={card.front} back={card.back} key={card.front.title} />
          ))}
        </CardStack>
      </Section>
      <Section title="Projects" id="projects">
        hi
      </Section>
      <SplitSection title="Contact" id="contact">
        <ContactForm />
        <Flex maxW="sm" ml="auto" display={{ base: "none", md: "flex" }}>
          <Image src={contactGraphic} fallbackSrc="https://via.placeholder.com/150" />
        </Flex>
      </SplitSection>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
