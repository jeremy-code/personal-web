import React from "react";
import { Card } from "components/Card";
import { Heading, Text, Badge, Stack, Flex, IconButton, Divider, Link } from "@chakra-ui/react";

import { patientport } from "assets";
import { FaGithub, FaRegPlayCircle } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <Card image={patientport}>
      <Stack w="full">
        <Heading as="h3" size="md">
          PatientPort
        </Heading>
        <Text>{"React blockchain web app for managing patient data"}</Text>
      </Stack>
      <Flex justify="flex-start" w="full" gap={2}>
        <IconButton
          aria-label="github"
          icon={<FaGithub />}
          as={Link}
          href="https://github.com/rishimagiawala/patient-port"
          isExternal
        />
        <IconButton
          bg="teal.100"
          color="teal.500"
          _hover={{
            bg: "teal.200",
          }}
          _active={{
            bg: "teal.200",
          }}
          aria-label="demo"
          icon={<FaRegPlayCircle />}
          as={Link}
          href="https://patientport.tech/"
          isExternal
        />
      </Flex>
      <Divider />
      <Flex gap={2}>
        <Badge variant="subtle" colorScheme="teal">
          React
        </Badge>
        <Badge variant="subtle" colorScheme="teal">
          Solidity
        </Badge>
        <Badge variant="subtle" colorScheme="teal">
          ethers.js
        </Badge>
      </Flex>
    </Card>
  );
};

export default ProjectCard;
