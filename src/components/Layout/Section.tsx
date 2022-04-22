import React from "react";
import { Container, Heading } from "@chakra-ui/react";

import { SectionProps } from "utils/const";

const Section = ({ children, title, id }: SectionProps) => {
  return (
    <Container
      id={id}
      as="section"
      minH="md"
      py={8}
      display="flex"
      flexDir="column"
      gap={10}
      justifyContent="center"
    >
      <Heading as="h2" size="xl" fontWeight="semibold">
        {title}
      </Heading>
      {children}
    </Container>
  );
};

export default Section;
