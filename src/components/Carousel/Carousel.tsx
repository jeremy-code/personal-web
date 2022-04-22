import React, { useState, useEffect, useRef } from "react";
import { Slider, SliderTrack, SliderFilledTrack, IconButton, Flex, Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

import { ProjectCard } from "components/Card";

const CarouselItem = () => {
  return (
    <motion.div>
      <ProjectCard />
    </motion.div>
  );
};

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [carousel]);

  return (
    <>
      <Box ref={carousel} overflow="hidden" cursor="grab">
        <Flex as={motion.div} gap={4} drag="x" dragConstraints={{ right: 0, left: -width }}>
          {[...Array(8)].map((_, index) => (
            <CarouselItem key={index} />
          ))}
          {}
        </Flex>
      </Box>
      <Flex gap={8}>
        <IconButton aria-label="left" icon={<ChevronLeftIcon />} />
        <Slider aria-label="slider-ex-1" defaultValue={30} isReadOnly>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
        </Slider>
        <IconButton aria-label="right" icon={<ChevronRightIcon />} />
      </Flex>
    </>
  );
};

export default Carousel;
