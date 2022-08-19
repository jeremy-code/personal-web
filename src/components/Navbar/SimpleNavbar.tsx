import React, { forwardRef } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  BoxProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { NavLink } from "../Navbar";
import { ToggleDarkMode } from "../Misc";
import NAV_ITEMS from "../../../content/nav-items.json";
import MobileNavButton from "./MobileNavButton";

type NavbarProps = BoxProps;

const SimpleNavbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderBottom="1px"
      borderColor={useColorModeValue("gray.200", "gray.900")}
      py={4}
      ref={ref}
      w="full"
      zIndex={999}
      position="relative"
      {...props}
    >
      <Container as={Flex} align="center" justify="space-between">
        <MobileNavButton
          aria-label="Open navigation menu"
          display={["block", null, "none"]}
        />
        <Flex gap={4} align="center">
          <Flex gap={3} align="center">
            <Link to="/">
              <StaticImage
                src="../../assets/icon.svg"
                loading="eager"
                alt="logo"
                width={40}
                height={40}
              />
            </Link>
            <Heading
              as={Link}
              to="/"
              size="md"
              _hover={{ textDecoration: "none" }}
            >
              Jeremy Nguyen
            </Heading>
          </Flex>
        </Flex>
        <Flex gap={8} align="center" display={{ base: "none", md: "flex" }}>
          {NAV_ITEMS.content.map(({ name, id }) => (
            <NavLink key={id} href={id} text={name} />
          ))}
        </Flex>
        <Flex>
          <ToggleDarkMode />
        </Flex>
      </Container>
    </Box>
  );
});

export default SimpleNavbar;
