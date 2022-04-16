import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { motion, useCycle, useAnimation } from "framer-motion";

import { FrontCardProps, BackCardProps } from "utils/const";
import { FrontCard, BackCard } from "components/Card";

const variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const AnimatedCard = ({ front, back }: { front: FrontCardProps; back: BackCardProps }) => {
  const [isFlipped, toggleFlip] = useCycle(false, true);

  const card1 = useAnimation();
  const card2 = useAnimation();

  const toggleFlipped = () => {
    toggleFlip();
    card1.start({
      opacity: isFlipped ? [0, 1] : [1, 0],
      rotateX: isFlipped ? [180, 0] : [0, 180],
      transformPerspective: 1000,
    });
    card2.start({
      opacity: isFlipped ? [1, 0] : [0, 1],
      rotateX: isFlipped ? [180, 0] : [0, 180],
      transformPerspective: 1000,
    });
  };

  const transition = {
    opacity: {
      delay: 0.2,
      type: "spring",
      stiffness: 300,
      duration: 0.1,
    },
    default: {
      type: "spring",
      stiffness: 300,
      duration: 0.5,
    },
  };

  return (
    <Grid gridTemplateColumns="1fr">
      <GridItem gridArea={"1 / 1 / 2 / 2"} zIndex={isFlipped ? 0 : 1}>
        <motion.div
          initial="visible"
          variants={variants}
          animate={card1}
          transition={transition}
          onTap={toggleFlipped}
          style={{ cursor: "pointer", height: "100%", userSelect: "none" }}
        >
          <FrontCard title={front.title} subtitle={front.subtitle} icon={front.icon} />
        </motion.div>
      </GridItem>
      <GridItem gridArea={"1 / 1 / 2 / 2"} zIndex={isFlipped ? 1 : 0}>
        <motion.div
          initial="hidden"
          variants={variants}
          animate={card2}
          transition={transition}
          onTap={toggleFlipped}
          style={{ cursor: "pointer", height: "100%", userSelect: "none" }}
        >
          <motion.div initial={{ rotateX: 180 }} style={{ height: "100%" }}>
            <BackCard description={back.description} />
          </motion.div>
        </motion.div>
      </GridItem>
    </Grid>
  );
};

export default AnimatedCard;
