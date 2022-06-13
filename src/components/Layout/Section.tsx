import React from "react";
import { Container, Heading } from "@chakra-ui/react";

import { SectionProps } from "utils/const";

const Section = ({ children, title, id }: SectionProps) => {
  return (
    <Container id={id} as="section" pb={24} display="flex" flexDir="column" gap={10}>
      <Heading as="h2" size="xl" fontWeight="semibold">
        {title}
      </Heading>
      {children}
    </Container>
  );
};

export default Section;
