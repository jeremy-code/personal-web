import React from "react";
import { Center, Text, Link } from "@chakra-ui/react";
import { SOCIAL_MEDIA } from "utils/const";

const Footer = () => {
  return (
    <Center as="footer" borderTop="1px" borderColor="gray.200" py={6} mt={8}>
      <Text>
        {"Made with "}
        <span role="img" aria-label="love">
          ❤️
        </span>
        {" by "}
        <Link
          href={
            // Returns the link to the GitHub profile found in the constants file
            SOCIAL_MEDIA.find((item) => item.name === "GitHub")?.link || "https://jeremynguyen.dev"
          }
          color="teal.500"
          isExternal
        >
          Jeremy Nguyen
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
