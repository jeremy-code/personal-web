import React from "react";
import { Card } from "components/Card";
import { Heading, Text, Badge, Stack, Flex, IconButton, Divider, Link } from "@chakra-ui/react";
import { FaGithub, FaRegPlayCircle } from "react-icons/fa";

import { CarouselCard } from "utils/const";

const ProjectCard = ({ title, tags, description, github, link, image }: CarouselCard) => {
  return (
    <Card image={image} altText={title}>
      <Stack w="full">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Stack>
      <Flex justify="flex-start" w="full" gap={2}>
        <IconButton aria-label="github" icon={<FaGithub />} as={Link} href={github} isExternal />
        <IconButton
          bg="teal.100"
          color="teal.500"
          _hover={{
            bg: "teal.200",
          }}
          aria-label="demo"
          icon={<FaRegPlayCircle />}
          as={Link}
          href={link}
          isExternal
        />
      </Flex>
      <Divider />
      <Flex gap={2}>
        {tags.map((tag) => (
          <Badge key={tag} variant="subtle" colorScheme="teal">
            {tag}
          </Badge>
        ))}
      </Flex>
    </Card>
  );
};

export default ProjectCard;
