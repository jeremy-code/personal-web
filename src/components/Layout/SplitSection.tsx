import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import { SectionProps } from "utils/const";
import { Section } from "components/Layout";

const SplitSection = ({ children, title, id }: SectionProps) => {
  return (
    <Section title={title} id={id}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {children}
      </SimpleGrid>
    </Section>
  );
};

export default SplitSection;
