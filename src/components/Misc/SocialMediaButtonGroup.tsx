import React from "react";
import { Flex } from "@chakra-ui/react";

import { SocialMediaButton } from "components/Misc";

type SocialMediaButtonGroupProps = {
  socialMedia: Array<{
    icon: React.ReactElement;
    username: string;
    link: string;
    color: string;
  }>;
};
const SocialMediaButtonGroup = ({ socialMedia }: SocialMediaButtonGroupProps) => {
  return (
    <Flex gap={4} flexDir={{ base: "column", md: "row" }}>
      {socialMedia.map((socialMediaButton) => (
        <SocialMediaButton
          key={socialMediaButton.link}
          icon={socialMediaButton.icon}
          username={socialMediaButton.username}
          link={socialMediaButton.link}
          color={socialMediaButton.color}
        />
      ))}
    </Flex>
  );
};

export default SocialMediaButtonGroup;
