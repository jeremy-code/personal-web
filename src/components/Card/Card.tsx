import React from "react";

import { Box, Stack, Flex, Image } from "@chakra-ui/react";

type CardProps = {
  children: React.ReactNode;
  image?: string;
};

const Card = ({ children, image }: CardProps) => {
  return (
    <Flex borderWidth="1px" borderRadius="lg" h="full" direction="column">
      {image && (
        <Image
          w={"full"}
          borderWidth="1px"
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
          h="200px"
          src={image}
          objectFit={"cover"}
        />
      )}
      <Flex
        flexDirection="column"
        gap={4}
        alignItems="center"
        grow={1}
        justifyContent="center"
        p={8}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Card;
