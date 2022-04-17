import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Circle,
  Icon,
  Heading,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IoIosRocket } from "react-icons/io";
import { Link as scrollLink, animateScroll } from "react-scroll";
import { motion, AnimateSharedLayout, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { NAV_LINKS } from "utils/const";

type NavLinkProps = {
  text: string;
  to: string;
};

type AniamtedNavbarProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  children: React.ReactNode;
};

const AnimatedNavbar = ({ isOpen, onClose, onOpen, children }: AniamtedNavbarProps) => {
  const { ref, inView } = useInView();

  return (
    <>
      <Box ref={ref} pt={8} mb={8}>
        <ToggleMobileNav isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
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
          <ToggleMobileNav isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
          {children}
        </Box>
      </motion.div>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        size="xs"
        trapFocus={false}
        blockScrollOnMount={false}
      >
        <DrawerOverlay />
        <MobileNav onClose={onClose} />
      </Drawer>
    </>
  );
};

type MobileNavProps = {
  onClose: () => void;
};

const MobileNav = ({ onClose }: MobileNavProps) => {
  return (
    <DrawerContent p={4}>
      <Flex flexDir="column" gap={8}>
        <Flex>
          <Flex gap={4} align="center" flexShrink={1}>
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
          <Flex grow={1} justifyContent="flex-end">
            <IconButton
              aria-label="Close"
              icon={<CloseIcon />}
              variant="ghost"
              onClick={onClose}
              size="lg"
            />
          </Flex>
        </Flex>

        <Box as="nav">
          {NAV_LINKS.map(({ name, id }) => (
            <MobileNavLink key={id} to={id} text={name} onClose={onClose} />
          ))}
        </Box>
      </Flex>
    </DrawerContent>
  );
};

type ToggleMobileNavbarProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const ToggleMobileNav = ({ isOpen, onClose, onOpen }: ToggleMobileNavbarProps) => {
  return (
    <>
      <Box position="absolute" left="1rem" display={{ md: "none" }}>
        <IconButton
          size={"md"}
          icon={<HamburgerIcon />}
          aria-label={"Open Menu"}
          isRound
          onClick={isOpen ? onClose : onOpen}
        />
      </Box>
    </>
  );
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

type MobileNavLinkProps = {
  to: string;
  text: string;
  onClose: () => void;
};

const MobileNavLink = ({ to, text, onClose }: MobileNavLinkProps) => {
  const controls = useAnimation();

  return (
    <Box pb={8}>
      <motion.div initial={{ opacity: 0.5 }} animate={controls} style={{ position: "relative" }}>
        <Link
          as={scrollLink}
          to={to}
          spy={true}
          smooth={true}
          duration={500}
          fontWeight="semibold"
          onSetActive={() => {
            controls.start({
              opacity: 1,
              color: "#319795",
            });
          }}
          onSetInactive={() => {
            controls.start({
              opacity: 0.5,
              color: "#1a202c",
            });
          }}
          onClick={onClose}
          _hover={{ textDecoration: "none" }}
        >
          {text}
        </Link>
      </motion.div>
    </Box>
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

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <AnimatedNavbar isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <Container as={Flex} align="center" justifyContent={{ base: "center", md: "space-between" }}>
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
        <Flex gap={8} align="center" display={{ base: "none", md: "flex" }}>
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
