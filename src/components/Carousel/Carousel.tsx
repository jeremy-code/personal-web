import React, { useState, useEffect, useRef } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { ProjectCard } from "../Card";
import PROJECT_CARDS from "../../../content/project-cards.json";

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      console.log(PROJECT_CARDS);
    }
  }, [carousel]);

  return (
    <Box ref={carousel} overflow="hidden" cursor="grab">
      <SimpleGrid
        gridAutoFlow="column"
        gridAutoColumns="1fr"
        as={motion.div}
        gap={4}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {PROJECT_CARDS.content.map((card) => (
          <ProjectCard key={card.title} {...card} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Carousel;
