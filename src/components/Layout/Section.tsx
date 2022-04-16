import React from "react";
import { Container, Heading } from "@chakra-ui/react";

import { SectionProps } from "utils/const";

const Section = ({ children, title, id }: SectionProps) => {
  return (
    <Container
      as="section"
      py={8}
      display="flex"
      flexDirection="column"
      gap={10}
      id={id}
      minH="md"
      justifyContent="center"
    >
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      {children}
    </Container>
  );
};

export default Section;
