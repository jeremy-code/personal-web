import React from "react";
import {
  Center,
  Text,
  Link as CLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Center
      as="footer"
      borderTop="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      py={6}
      mt={8}
    >
      <Text>
        {"Made with "}
        <span role="img" aria-label="love">
          ❤️
        </span>
        {" by "}
        <CLink as={Link} to="/" color="primary.500">
          Jeremy Nguyen
        </CLink>
      </Text>
    </Center>
  );
};

export default Footer;
