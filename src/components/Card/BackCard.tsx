import React from "react";
import { Text } from "@chakra-ui/react";

import { Card } from "components/Card";

const BackCard = ({ description }: { description: string }) => {
  return (
    <Card>
      <Card.Content justify="center">
        <Text>{description}</Text>
      </Card.Content>
    </Card>
  );
};

export default BackCard;
