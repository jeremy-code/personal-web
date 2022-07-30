import React from "react";
import { Center, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center as="footer" borderTop="1px" borderColor="gray.200" py={6} mt={8}>
      <Text>
        {"Made with "}
        <span role="img" aria-label="love">
          ❤️
        </span>
        {" by "}
        <Link href="https://jeremynguyen.dev" color="primary.500" isExternal>
          Jeremy Nguyen
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
