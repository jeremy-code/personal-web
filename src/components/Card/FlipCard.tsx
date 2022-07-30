import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  motion,
  useCycle,
  useAnimation,
  Transition,
  MotionStyle,
} from "framer-motion";

import { FrontCard, BackCard } from "../Card";

type FrontCardProps = {
  title: string;
  subtitle: string;
  icon: string;
};

type BackCardProps = {
  description: string;
};

const AnimatedCard = ({
  front,
  back,
}: {
  front: FrontCardProps;
  back: BackCardProps;
}) => {
  const [isFlipped, toggleFlip] = useCycle(false, true);
  const frontCardControls = useAnimation();
  const backCardControls = useAnimation();

  const onTap = () => {
    toggleFlip();
    frontCardControls.start({
      opacity: isFlipped ? [0, 1] : [1, 0],
      rotateX: isFlipped ? [180, 0] : [0, 180],
      transformPerspective: 1000,
    });
    backCardControls.start({
      opacity: isFlipped ? [1, 0] : [0, 1],
      rotateX: isFlipped ? [180, 0] : [0, 180],
      transformPerspective: 1000,
    });
  };

  const transition: Transition = {
    opacity: {
      delay: 0.2,
      duration: 0.1,
    },
    default: {
      type: "spring",
      stiffness: 300,
      duration: 0.5,
    },
  };

  const cardStyles: MotionStyle = {
    cursor: "pointer",
    height: "100%",
    userSelect: "none",
  };

  return (
    <Grid>
      <GridItem gridArea="1 / 1" zIndex={isFlipped ? 0 : 1}>
        <motion.div
          animate={frontCardControls}
          onTap={onTap}
          whileHover={{ scale: 1.05 }}
          transition={transition}
          style={cardStyles}
        >
          <FrontCard {...front} />
        </motion.div>
      </GridItem>
      <GridItem gridArea="1 / 1 " zIndex={isFlipped ? 1 : 0}>
        <motion.div
          animate={backCardControls}
          onTap={onTap}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          transition={transition}
          style={cardStyles}
        >
          <motion.div initial={{ rotateX: 180 }} style={{ height: "100%" }}>
            <BackCard {...back} />
          </motion.div>
        </motion.div>
      </GridItem>
    </Grid>
  );
};

export default AnimatedCard;
