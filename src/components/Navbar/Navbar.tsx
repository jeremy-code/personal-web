import React, { useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import SimpleNavbar from "./SimpleNavbar";
import { useOnScreen } from "../../hooks";

const NavbarVariants: Variants = {
  hidden: {
    y: -100,
  },
  fixed: {
    y: 0,
  },
};

const MotionNavbar = motion(SimpleNavbar);

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <>
      {/* Animated navbar that is rendered whenever the normal navbar leaves the viewport */}
      <AnimatePresence>
        {!onScreen && (
          <MotionNavbar
            variants={NavbarVariants}
            animate="fixed"
            initial="hidden"
            exit="hidden"
            position="fixed"
          />
        )}
      </AnimatePresence>

      {/* Normal, non-animated navbar that always exists */}
      <SimpleNavbar id="navbar" ref={ref} />
    </>
  );
};

export default Navbar;
