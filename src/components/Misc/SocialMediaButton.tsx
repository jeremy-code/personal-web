import React from "react";
import { IconButton, Flex, Link } from "@chakra-ui/react";

type SocialMediaButtonProps = {
  icon: React.ReactElement;
  username: string;
  link: string;
  color: string;
};

const SocialMediaButton = ({ icon, username, link, color }: SocialMediaButtonProps) => {
  return (
    <Flex>
      <IconButton
        aria-label="Github"
        as={Link}
        icon={icon}
        href={link}
        isExternal
        borderRightRadius={0}
        colorScheme={color}
      />
      <Flex
        border="1px"
        borderLeft={0}
        borderColor="gray.200"
        borderRightRadius="md"
        px={4}
        align="center"
      >
        <Link href={link} isExternal>
          {username}
        </Link>
      </Flex>
    </Flex>
  );
};

export default SocialMediaButton;
