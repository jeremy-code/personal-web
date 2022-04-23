import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  ButtonGroup,
  Button,
  Image,
  LinkOverlay,
  Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Link as scrollLink } from "react-scroll";

import { developerGraphic } from "assets";

const Hero = () => {
  return (
    <Container id="hero" as={SimpleGrid} columns={[1, null, 2]} minH="md">
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
          <Heading as="h3" size="lg">
            {"I'm Jeremy"}
          </Heading>
        </Flex>
        <ButtonGroup>
          <Button
            colorScheme="teal"
            rightIcon={<ChevronRightIcon />}
            as={scrollLink}
            to="contact"
            smooth={true}
            duration={500}
            cursor="pointer"
          >
            Contact me
          </Button>
          <Button
            as={LinkOverlay}
            variant="ghost"
            fontWeight="normal"
            isExternal
            href={process.env.PUBLIC_URL + "/resume.pdf"}
          >
            See my Resume
          </Button>
        </ButtonGroup>
      </Stack>
      <Box display={["none", null, "flex"]}>
        <Image src={developerGraphic} />
      </Box>
    </Container>
  );
};

export default Hero;
