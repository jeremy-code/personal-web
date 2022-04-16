import React from "react";

import { SimpleGrid } from "@chakra-ui/react";

type CardStackProps = {
  children: React.ReactNode;
};

const CardStack = ({ children }: CardStackProps) => {
  return (
    <SimpleGrid columns={[1, null, 3]} spacing={4}>
      {children}
    </SimpleGrid>
  );
};

export default CardStack;
