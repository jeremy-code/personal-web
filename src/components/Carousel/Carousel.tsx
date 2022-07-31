import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import { Box } from "@chakra-ui/react";
import { motion, MotionStyle } from "framer-motion";

import CarouselCards from "./CarouselCards";

const AnimatedProjectCards = motion(CarouselCards);

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const constraintRef = useRef<HTMLDivElement>(null);

  /**
   * Definitely not a great solution, but it works. Prior, I was just using the carousels
   * ref to set the width of the carousel, but the issue is that it would break on resizing.
   * The reason is that there's a bug with Framer motion (see https://github.com/framer/motion/issues/1454)
   * where drag constraints are lost on re-render.
   *
   * This solution is simply get the width of the carousel and set it some div's width and move it left the same
   * amount as the carousel, as ref's don't break on re-render.
   */
  const [constraintStyle, setConstraintStyle] = useState<MotionStyle>({
    position: "absolute",
    width: 0,
    left: 0,
  });

  // Memoize the callback
  const updateConstraint = useCallback(() => {
    if (!carouselRef.current) return;
    const offsetLeft = carouselRef.current.offsetLeft;
    const offsetWidth = carouselRef.current.offsetWidth;
    const scrollWidth = carouselRef.current.scrollWidth;
    setConstraintStyle((prev) => ({
      ...prev,
      width: offsetWidth + (scrollWidth - offsetWidth),
      left: offsetWidth - scrollWidth + offsetLeft,
    }));
  }, [carouselRef]);

  useLayoutEffect(() => {
    updateConstraint();
    window.addEventListener("resize", updateConstraint);

    return () => window.removeEventListener("resize", updateConstraint);
  }, []);

  return (
    <Box overflow="hidden">
      <AnimatedProjectCards
        drag="x"
        dragConstraints={constraintRef}
        ref={carouselRef}
      />
      <motion.div style={constraintStyle} ref={constraintRef} />
    </Box>
  );
};

export default Carousel;
