import React from "react";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

type SharedSectionProps = {
  children: React.ReactNode;
  title: string;
  id: string;
};

const SplitSection = ({ children, title, id }: SharedSectionProps) => {
  return (
    <SingleSection title={title} id={id}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {children}
      </SimpleGrid>
    </SingleSection>
  );
};

const SingleSection = ({ children, title, id }: SharedSectionProps) => {
  return (
    <Container
      id={id}
      as="section"
      py={12}
      display="flex"
      flexDir="column"
      gap={10}
    >
      <Heading as="h2" size="xl" fontWeight="semibold">
        {title}
      </Heading>
      {children}
    </Container>
  );
};

type SectionProps = {
  variant?: "split" | "single";
} & SharedSectionProps;

const Section = ({ variant, ...rest }: SectionProps) => {
  switch (variant) {
    case "split":
      return <SplitSection {...rest} />;
    case "single":
      return <SingleSection {...rest} />;
    default:
      return <SingleSection {...rest} />;
  }
};

export default Section;
