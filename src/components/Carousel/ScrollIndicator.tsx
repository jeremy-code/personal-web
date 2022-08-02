import React, { useEffect } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion, useSpring } from "framer-motion";

type ScrollIndicatorProps = {
  callback: () => number;
};

const ScrollIndicator = ({ callback }: ScrollIndicatorProps) => {
  const percentage = useSpring(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const value = callback();
      percentage.set(value);
    }, 1000);

    return () => clearInterval(interval);
  }, [callback, percentage]);

  return (
    <Box width="100%" height={5}>
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
      >
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
