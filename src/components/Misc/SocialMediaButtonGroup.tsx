import React from "react";
import { Flex } from "@chakra-ui/react";

import { SocialMediaButton } from "components/Misc";
import { SocialMediaProps } from "utils/const";

type SocialMediaButtonGroupProps = {
  socialMedia: Array<SocialMediaProps>;
};
const SocialMediaButtonGroup = ({ socialMedia }: SocialMediaButtonGroupProps) => {
  return (
    <Flex gap={4} flexDir={["column", null, "row"]}>
      {socialMedia.map((socialMediaInfo) => (
        <SocialMediaButton key={socialMediaInfo.link} {...socialMediaInfo} />
      ))}
    </Flex>
  );
};

export default SocialMediaButtonGroup;
