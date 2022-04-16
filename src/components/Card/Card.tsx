import React from "react";

import { Stack, Flex } from "@chakra-ui/react";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <Stack borderWidth="1px" borderRadius="lg" padding={4} gap={2} h="full">
      <Flex
        flexDirection="column"
        gap={4}
        alignItems="center"
        my={4}
        grow={1}
        justifyContent="center"
      >
        {children}
      </Flex>
    </Stack>
  );
};

export default Card;
