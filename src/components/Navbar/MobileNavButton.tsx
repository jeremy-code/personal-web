import React, { useRef } from "react";
import {
  motion,
  SVGMotionProps,
  useCycle,
  AnimatePresence,
} from "framer-motion";
import { IconButton, IconButtonProps, Stack } from "@chakra-ui/react";

import SimpleNavLink from "./SimpleNavLink";

const Path = (props: SVGMotionProps<SVGPathElement>) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
};

import NAV_ITEMS from "../../../content/nav-items.json";

const MobileNavButton = (props: IconButtonProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleClick = () => {
    toggleOpen();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        pt={1}
        zIndex={1001}
        bg="transparent"
        _hover={{ bg: "transparent" }}
        display="flex"
        alignItems="center"
        {...props}
      >
        <svg width="100%" height="23" viewBox="0 0 22 22">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          />
        </svg>
      </IconButton>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100" }}
            animate={{ y: 0 }}
            exit={{ y: "-100" }}
            style={{
              position: "absolute",
              width: "100%",
              left: 0,
              top: "100%",
              backgroundColor: "white",
              borderBottom: "1px solid #E2E8F0",
            }}
          >
            <Stack>
              {NAV_ITEMS.content.map(({ name, id }) => (
                <SimpleNavLink
                  key={id}
                  text={name}
                  href={id}
                  textAlign="center"
                  py={2}
                  _hover={{ textDecor: "none", bg: "gray.100" }}
                />
              ))}
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavButton;
