import React, { forwardRef } from "react";
import { SimpleGrid } from "@chakra-ui/react";

import { ProjectCard } from "../Card";
import PROJECT_CARDS from "../../../content/project-cards.json";

const CarouselCards = forwardRef(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <SimpleGrid gridAutoFlow="column" gap={4} ref={ref}>
        {PROJECT_CARDS.content.map((card) => (
          <ProjectCard key={card.title} {...card} />
        ))}
      </SimpleGrid>
    );
  }
);

export default CarouselCards;
