import React from "react";
import { Box, Badge, Circle, Heading } from "@chakra-ui/react";

import { Card } from "../Card";
import { Icon } from "../Misc";
import type { IconType } from "../Misc";

type FrontCardProps = {
  title: string;
  subtitle: string;
  icon: IconType;
};

const FrontCard = ({ title, subtitle, icon }: FrontCardProps) => {
  return (
    <Card>
      <Card.Content align="center">
        <Box>
          <Badge>{subtitle}</Badge>
        </Box>
        <Circle size="4em" bg="primary.100" color="primary.500">
          <Icon icon={icon} boxSize="1.5em" />
        </Circle>
        <Heading as="h1" size="md" fontWeight="normal">
          {title}
        </Heading>
      </Card.Content>
    </Card>
  );
};

export default FrontCard;
