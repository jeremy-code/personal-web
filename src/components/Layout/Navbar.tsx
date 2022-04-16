import React, { useState } from "react";
import { Box, Container, Flex, Circle, Icon, Heading, Link } from "@chakra-ui/react";
import { IoIosRocket } from "react-icons/io";
import { Link as scrollLink, animateScroll } from "react-scroll";
import { motion, AnimateSharedLayout, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { NAV_LINKS } from "utils/const";

type NavLinkProps = {
  text: string;
  to: string;
};

const NavLink = ({ to, text }: NavLinkProps) => {
  const [active, setActive] = useState<boolean>(false);
  const controls = useAnimation();

  return (
    <>
      <motion.div initial={{ opacity: 0.5 }} animate={controls} style={{ position: "relative" }}>
        <Link
          as={scrollLink}
          to={to}
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => {
            controls.start({
              opacity: 1,
              color: "#319795",
            });
            setActive(true);
          }}
          onSetInactive={() => {
            controls.start({
              opacity: 0.5,
              color: "#1a202c",
            });
            setActive(false);
          }}
          _hover={{ textDecoration: "none" }}
        >
          {text}
        </Link>
        {active && (
          <motion.div
            layoutId="underline"
            style={{
              position: "absolute",
              width: "140%",
              left: "-20%",
              bottom: "-25px",
              height: "4px",
              borderRadius: "4px",
              background: "#319795",
              opacity: 0.85,
            }}
          ></motion.div>
        )}
      </motion.div>
    </>
  );
};

const variants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
  },
};

const AnimatedNavbar = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView();

  return (
    <>
      <Box ref={ref} pt={8} mb={8}>
        {children}
      </Box>
      <motion.div
        initial="hidden"
        animate={inView ? "hidden" : "visible"}
        variants={variants}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 99 }}
        transition={{
          type: "spring",
          stiffness: 300,
          bounce: 0.3,
        }}
      >
        <Box background="white" borderBottom="1px" borderColor="gray.200" py={4}>
          {children}
        </Box>
      </motion.div>
    </>
  );
};

const Navbar = () => {
  return (
    <AnimatedNavbar>
      <Container as={Flex} justifyContent="space-between" align="center">
        <Flex gap={4} align="center">
          <Circle
            as={Link}
            onClick={() =>
              animateScroll.scrollToTop({
                duration: 500,
                smooth: true,
              })
            }
            size="40px"
            bg="teal.500"
            color="teal.100"
          >
            <Icon as={IoIosRocket} />
          </Circle>
          <Heading
            as={Link}
            size="md"
            onClick={() =>
              animateScroll.scrollToTop({
                duration: 500,
                smooth: true,
              })
            }
            _hover={{ textDecoration: "none" }}
          >
            Jeremy Nguyen
          </Heading>
        </Flex>
        <Flex gap={8} align="center">
          <AnimateSharedLayout>
            {NAV_LINKS.map(({ name, id }) => (
              <NavLink key={id} to={id} text={name} />
            ))}
          </AnimateSharedLayout>
        </Flex>
      </Container>
    </AnimatedNavbar>
  );
};

export default Navbar;
