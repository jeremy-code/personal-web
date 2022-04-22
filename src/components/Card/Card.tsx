import React from "react";

import { Stack, Image } from "@chakra-ui/react";

type CardProps = {
  children: React.ReactNode;
  image?: string;
};

const Card = ({ children, image }: CardProps) => {
  return (
    <Stack borderWidth="1px" borderRadius="lg" h="full">
      {image && (
        <Image borderTopRadius="lg" h="200px" objectFit="cover" draggable="false" src={image} />
      )}
      <Stack flexGrow={1} gap={4} align="center" justifyContent="center" p={8}>
        {children}
      </Stack>
    </Stack>
  );
};

export default Card;
