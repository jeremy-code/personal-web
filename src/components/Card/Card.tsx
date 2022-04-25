import React from "react";

import { Stack, Image } from "@chakra-ui/react";

type CardProps = {
  children: React.ReactNode;
  image?: string;
  altText?: string;
};

const Card = ({ children, image, altText }: CardProps) => {
  return (
    <Stack borderWidth="1px" borderRadius="lg" h="full" w="full" minW="300px">
      {image && (
        <Image
          width="full"
          height="xs"
          objectFit="cover"
          draggable="false"
          src={image}
          alt={altText}
        />
      )}
      <Stack flexGrow={1} gap={4} align="center" justifyContent="center" p={8}>
        {children}
      </Stack>
    </Stack>
  );
};

export default Card;
