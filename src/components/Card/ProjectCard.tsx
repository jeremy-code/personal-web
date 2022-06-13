import React from "react";
import { Heading, Text, ButtonGroup, IconButton, Link } from "@chakra-ui/react";
import { HiOutlineCode, HiOutlineExternalLink } from "react-icons/hi";

import { Card } from "components/Card";
import { CarouselCard } from "utils/const";

const ProjectCard = ({ title, tags, description, github, link, image }: CarouselCard) => {
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
            icon={<HiOutlineCode />}
          />
          <IconButton
            as={Link}
            href={link}
            aria-label="demo"
            isExternal
            icon={<HiOutlineExternalLink />}
            bg="teal.100"
            color="teal.500"
            _hover={{
              bg: "teal.200",
            }}
          />
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
