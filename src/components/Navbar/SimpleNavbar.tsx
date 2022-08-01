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

import NavLink from "./NavLink";
import NAV_ITEMS from "../../../content/nav-items.json";
import { ToggleDarkMode } from "../Misc";

const SimpleNavbar = forwardRef(
  (props: BoxProps, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <Box
        bg={useColorModeValue("white", "gray.900")}
        borderBottom="1px"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        py={4}
        ref={ref}
        w="full"
        zIndex={999}
        {...props}
      >
        <Container as={Flex} align="center" justify="space-between">
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
  }
);

export default SimpleNavbar;
