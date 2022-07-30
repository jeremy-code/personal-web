import React, { forwardRef } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  BoxProps,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

import NavLink from "./NavLink";
import NAV_ITEMS from "../../../content/nav-items.json";

const SimpleNavbar = forwardRef(
  (props: BoxProps, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <Box
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        py={4}
        ref={ref}
        w="full"
        zIndex={999}
        {...props}
      >
        <Container
          as={Flex}
          align="center"
          justify={["center", null, "space-between"]}
        >
          <Flex gap={4} align="center">
            <Flex gap={3} align="center">
              <StaticImage
                src="../../assets/icon.svg"
                loading="eager"
                alt="logo"
                width={40}
                height={40}
              />
              <Heading as={Link} size="md" _hover={{ textDecoration: "none" }}>
                Jeremy Nguyen
              </Heading>
            </Flex>
          </Flex>
          <Flex gap={8} align="center" display={{ base: "none", md: "flex" }}>
            {NAV_ITEMS.content.map(({ name, id }) => (
              <NavLink key={id} href={id} text={name} />
            ))}
          </Flex>
        </Container>
      </Box>
    );
  }
);

export default SimpleNavbar;
