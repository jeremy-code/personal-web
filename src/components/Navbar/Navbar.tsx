import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants, useInView } from "framer-motion";

import SimpleNavbar from "./SimpleNavbar";

const NavbarVariants: Variants = {
  hidden: {
    y: -100,
    position: "fixed",
  },
  fixed: {
    y: 0,
    position: "fixed",
  },
};

const MotionComponent = motion(SimpleNavbar);

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      {/* Animated navbar that is rendered whenever the normal navbar leaves the viewport */}
      <AnimatePresence>
        {!isInView && (
          <MotionComponent
            variants={NavbarVariants}
            animate="fixed"
            initial="hidden"
            exit="hidden"
          />
        )}
      </AnimatePresence>

      {/* Normal, non-animated navbar that always exists */}
      <SimpleNavbar id="navbar" ref={ref} />
    </>
  );
};

export default Navbar;
