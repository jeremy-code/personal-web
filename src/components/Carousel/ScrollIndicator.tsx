import React, { useCallback } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

type ScrollIndicatorProps = {
  isDrag: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
};

const ScrollIndicator = ({ isDrag, containerRef }: ScrollIndicatorProps) => {
  const percentage = useSpring(0);

  const getTranslateX = (element: HTMLElement) => {
    if (!element || !element.style) return 0;
    // Get the translateX style from the carousel as a number
    const rawTranslateX = parseInt(
      element.style.transform.replace(/[^-\d.]/g, "")
    );
    // Return 0 if positive (meaning scrolled to the left), otherwise return the value of the translateX
    return rawTranslateX < 0 ? -rawTranslateX : 0;
  };

  const updatePercentage = useCallback(() => {
    const getPercent = () => {
      if (!containerRef.current) return 0;
      const element = containerRef.current;
      const translateX = getTranslateX(element);
      const totalWidth = element.scrollWidth - element.clientWidth;
      const percent = translateX / totalWidth;
      // Set the bounds to 0 and 1
      return percent > 1 ? 1 : percent < 0 ? 0 : percent;
    };
    percentage.set(getPercent());
    // only re-run when the transform changes (aka while dragging)
  }, [isDrag]);

  // When the user stops or starts dragging, update the percentage
  useEffect(() => {
    updatePercentage();

    // update the percentage at a set interval while dragging until the user stops dragging
    const interval = setInterval(updatePercentage, 100);
    if (!isDrag) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isDrag]);

  return (
    <Box width="100%" height={5}>
      <svg height="100%" width="100%" viewBox="0 0 100 2">
        <motion.line
          x1="1"
          y1="1"
          x2="99"
          y2="1"
          stroke={useColorModeValue("#f2f2f2", "#475569")}
          style={{ pathLength: 1 }}
          strokeLinecap="round"
        />
        <motion.line
          x1="1"
          y1="1"
          x2="99"
          y2="1"
          stroke="#0ea5e9"
          strokeLinecap="round"
          pathLength={percentage}
        />
      </svg>
    </Box>
  );
};

export default ScrollIndicator;
