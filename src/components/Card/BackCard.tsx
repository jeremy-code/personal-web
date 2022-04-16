import React from "react";
import { Text } from "@chakra-ui/react";

import { Card } from "components/Card";

const BackCard = ({ description }: { description: string }) => {
  return (
    <Card>
      <Text>{description}</Text>
    </Card>
  );
};

export default BackCard;
