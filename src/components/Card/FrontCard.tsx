import React from "react";
import { Box, Badge, Circle, Icon, Heading } from "@chakra-ui/react";
import { Card } from "components/Card";
import { IconType } from "react-icons/lib/cjs";

type FrontCardProps = {
  title: string;
  subtitle: string;
  icon: IconType;
};

const FrontCard = ({ title, subtitle, icon }: FrontCardProps) => {
  return (
    <Card>
      <Box>
        <Badge>{subtitle}</Badge>
      </Box>
      <Circle size="4em" bg="teal.100" color="teal.500">
        <Icon as={icon} boxSize="1.5em" />
      </Circle>
      <Heading as="h4" size="md" fontWeight="normal">
        {title}
      </Heading>
    </Card>
  );
};

export default FrontCard;
