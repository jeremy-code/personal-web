import React from "react";
import { IconButton, Flex, Link, Icon } from "@chakra-ui/react";

import { SocialMediaProps } from "utils/const";

const SocialMediaButton = ({ name, username, link, color, icon }: SocialMediaProps) => {
  return (
    <Flex>
      <IconButton
        icon={<Icon as={icon} />}
        aria-label={name}
        colorScheme={color}
        borderRightRadius={0}
        as={Link}
        href={link}
        isExternal
      />
      <Flex
        borderWidth="1px"
        borderColor="gray.200"
        borderRightRadius="md"
        borderLeft={0}
        px={4}
        align="center"
        _hover={{
          bg: "gray.100",
        }}
        as={Link}
        href={link}
        isExternal
      >
        {username}
      </Flex>
    </Flex>
  );
};

export default SocialMediaButton;
