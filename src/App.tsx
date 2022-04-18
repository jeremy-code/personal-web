import React from "react";
import { ChakraProvider, Flex, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import theme from "utils/theme";
import { Navbar, Hero, Footer, Section, SplitSection } from "components/Layout";
import { CardStack, AnimatedCard } from "components/Card";
import { ABOUT_CARDS } from "utils/const";
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
            <AnimatedCard front={card.front} back={card.back} key={card.front.title} />
          ))}
        </CardStack>
      </Section>
      <Section title="Projects" id="projects">
        <Carousel />
      </Section>
      <SplitSection title="Contact" id="contact">
        <ContactForm />
        <Flex maxW="sm" ml="auto" display={{ base: "none", md: "flex" }}>
          <Image src={contactGraphic} fallbackSrc="https://via.placeholder.com/150" />
        </Flex>
      </SplitSection>
      <Section title="Social" id="social">
        <SocialMediaButtonGroup
          socialMedia={[
            {
              icon: <FaGithub />,
              username: "jeremynguyencs",
              link: "https://github.com/jeremynguyencs",
              color: "black",
            },
            {
              icon: <FaLinkedin />,
              username: "jeremynguyencs",
              link: "https://www.linkedin.com/in/jeremynguyencs/",
              color: "linkedin",
            },
            {
              icon: <FaEnvelope />,
              username: "hi@jeremynguyen.dev",
              link: "mailto:hi@jeremynguyen.dev/",
              color: "red",
            },
          ]}
        />
      </Section>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
