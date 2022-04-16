import React from "react";

import { Center, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center as="footer" py={6} borderTop="1px" borderColor="gray.200" mt={8}>
      <Text>
        {"Made with "}
        <span role="img" aria-label="love">
          ❤️
        </span>
        {" by "}
        <Link href="https://github.com/jeremynguyencs" isExternal color="teal.500">
          Jeremy Nguyen
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
