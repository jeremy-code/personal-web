import React, { useState, useEffect, useRef } from "react";
import { Slider, SliderTrack, SliderFilledTrack, IconButton, Flex, Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { ProjectCard } from "components/Card";
import { motion, useAnimation } from "framer-motion";

type CarouselItemProps = {
  setChildrenWidth: React.Dispatch<React.SetStateAction<number[]>>;
};

const CarouselItem = ({ setChildrenWidth }: CarouselItemProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChildrenWidth((prevChildrenWidth: Array<number>) => [
      ...prevChildrenWidth,
      childrenRef.current?.clientWidth || 0,
    ]);
  }, [setChildrenWidth]);
  return (
    <motion.div ref={childrenRef}>
      <ProjectCard />
    </motion.div>
  );
};

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [childrenWidth, setChildrenWidth] = useState<Array<number>>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    } else {
      setWidth(0);
    }
  }, [carousel]);

  const modifyTarget = (event: number) => {
    const childWidth = childrenWidth[0];
    setCurrentIndex(Math.round(event / (childWidth + 15)));
    return Math.round(event / (childWidth + 15)) * (childWidth + 15);
  };

  const handleCarouselChange = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLDivElement;
    const targetId = target.id;
    const childWidth = childrenWidth[0] + 15;
    if (targetId === "left") {
      setCurrentIndex(currentIndex - 1);
      controls.start({
        x: -(currentIndex * childWidth),
      });
    }
    if (targetId === "right") {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
      controls.start({
        x: -(currentIndex * childWidth),
      });
    }
  };

  return (
    <>
      <Box ref={carousel} overflow="hidden" cursor="grab">
        <Flex
          gap={4}
          as={motion.div}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={1}
          animate={controls}
          dragTransition={{
            modifyTarget,
            power: 0,
            min: 0,
            max: 3000,
            timeConstant: 250,
            bounceStiffness: 200,
          }}
        >
          {[...Array(8)].map((_, index) => (
            <CarouselItem key={index} setChildrenWidth={setChildrenWidth} />
          ))}
          {}
        </Flex>
      </Box>
      <Flex gap={8}>
        <IconButton
          aria-label="left"
          icon={<ChevronLeftIcon />}
          id="left"
          onClick={handleCarouselChange}
        />
        <Slider aria-label="slider-ex-1" defaultValue={30} isReadOnly>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
        </Slider>
        <IconButton
          aria-label="right"
          icon={<ChevronRightIcon />}
          id="right"
          onClick={handleCarouselChange}
        />
      </Flex>
    </>
  );
};

export default Carousel;
