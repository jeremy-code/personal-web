import React from "react";
import { Heading, Text, ButtonGroup, IconButton, Link } from "@chakra-ui/react";

import { Icon } from "../Misc";
import { Card } from "../Card";

type ProjectCardProps = {
  title: string;
  tags: string[];
  description: string;
  github: string;
  link: string;
  image: string;
};

const ProjectCard = ({
  title,
  tags,
  description,
  github,
  link,
  image,
}: ProjectCardProps) => {
  return (
    <Card w="250px">
      <Card.Image image={image} altText={title} />
      <Card.Content>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Card.Content>
      <Card.Footer tags={tags}>
        <ButtonGroup>
          <IconButton
            as={Link}
            href={github}
            aria-label="github"
            isExternal
            icon={<Icon icon="CodeIcon" />}
          />
          <IconButton
            as={Link}
            href={link}
            aria-label="demo"
            isExternal
            icon={<Icon icon="ExternalLinkIcon" />}
            colorScheme="primary"
          />
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
