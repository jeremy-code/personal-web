import React from "react";
import { useColorMode, Switch, color } from "@chakra-ui/react";

import Icon from "./Icon";
import { AnimatePresence, motion } from "framer-motion";

const MotionIcon = motion(Icon);

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const booleanColorMode = colorMode === "light" ? false : true;

  return (
    <>
      <Switch
        size="lg"
        position="relative"
        isChecked={booleanColorMode}
        onChange={toggleColorMode}
        colorScheme="primary"
      >
        <AnimatePresence>
          {booleanColorMode ? (
            <MotionIcon
              key={colorMode}
              icon="MoonIcon"
              position="absolute"
              color="gray.600"
              right="3"
              top="1"
              cursor="pointer"
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              exit={{ x: 0 }}
            />
          ) : (
            // <Icon
            //   icon="MoonIcon"
            //   position="absolute"
            //   color="gray.600"
            //   right="3"
            //   top="1"
            //   cursor="pointer"
            // />
            <MotionIcon
              key={colorMode}
              icon="SunIcon"
              position="absolute"
              left="1"
              top="1"
              cursor="pointer"
              color="gray.500"
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              exit={{ x: 0 }}
            />
          )}
        </AnimatePresence>
      </Switch>
    </>
  );
};

export default ToggleDarkMode;
