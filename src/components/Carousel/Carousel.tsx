import React from "react";
import { Slider, SliderTrack, SliderFilledTrack, IconButton, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { ProjectCard } from "components/Card";

const Carousel = () => {
  return (
    <>
      <Flex
        gap={4}
        overflow="hidden"
        // _before={{
        //   bgGradient: "linear(to-r, white, transparent)",
        //   position: "absolute",
        //   w: "30px",
        //   content: "''",
        //   zIndex: 1,
        //   h: "100%",
        //   left: 0,
        //   top: 0,
        // }}
        _after={{
          bgGradient: "linear(to-l, white, transparent)",
          position: "absolute",
          w: "30px",
          content: "''",
          zIndex: 1,
          h: "100%",
          right: 0,
          top: 0,
        }}
        position="relative"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Flex>
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
