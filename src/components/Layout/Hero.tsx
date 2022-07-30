import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  LinkOverlay,
  Flex,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import { Icon } from "../Misc";

const Hero = () => {
  // Scroll to Contact section
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    const y = element!.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <Container
      id="hero"
      as={SimpleGrid}
      columns={[1, null, 2]}
      minH="xl"
      my={8}
    >
      <Stack justify="center" gap={10}>
        <Flex flexDir="column" gap={4}>
          <Flex gap={4}>
            <Heading as="h1" size="4xl">
              <motion.span
                role="img"
                aria-label="wave"
                aria-hidden="true"
                style={{
                  cursor: "pointer",
                  display: "inline-block",
                  userSelect: "none",
                  transformOrigin: "bottom right",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ rotate: [0, -15, 10, -15, 0] }}
                animate={{ rotate: [0, -15, 10, -15, 0] }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  bounce: 0.5,
                }}
              >
                👋
              </motion.span>
            </Heading>
            <Heading as="h1" size="4xl">
              Hi,
            </Heading>
          </Flex>
          <Text fontSize="4xl">{"I'm Jeremy"}</Text>
        </Flex>
        <ButtonGroup>
          <Button
            colorScheme="primary"
            rightIcon={<Icon icon="ChevronRightIcon" />}
            onClick={handleClick}
            // as={NavLink}
            // text=""
            // href="contact"
            cursor="pointer"
          >
            Contact me
          </Button>
          <Button
            as={LinkOverlay}
            variant="ghost"
            fontWeight="normal"
            isExternal
            href={"/resume.pdf"}
          >
            See my Resume
          </Button>
        </ButtonGroup>
      </Stack>
      <Box display={["none", null, "flex"]}>
        <StaticImage
          src="../../assets/developer-graphic.webp"
          alt="Developer graphic"
          objectFit="contain"
          loading="eager"
        />
      </Box>
    </Container>
  );
};

export default Hero;
