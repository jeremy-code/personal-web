import React from "react";
import {
  Flex,
  Divider,
  Badge,
  FlexProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

type CardContentProps = {
  children: React.ReactNode;
} & FlexProps;

const CardContent = ({ children, ...rest }: CardContentProps) => {
  return (
    <Flex
      flexGrow={1}
      flexDir="column"
      p={8}
      h="full"
      w="full"
      gap={4}
      {...rest}
    >
      {children}
    </Flex>
  );
};

type CardImageProps = {
  image: string;
  altText: string;
};

const CardImage = ({ image, altText }: CardImageProps) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          name: {
            in: [
              "crowdpage"
              "crypto-app"
              "patient-port"
              "rhythm-room"
              "covid-tracker"
            ]
          }
        }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(height: 200)
            }
          }
        }
      }
    }
  `);

  const array = data.allFile.edges;

  type ImageDataType = {
    node: {
      id: string;
      name: string;
      childImageSharp: {
        gatsbyImageData: any;
      };
    };
  };

  // find where the .name property is equal to the image name, then return the gatsbyImageData of that node
  const findImage = (image: string): IGatsbyImageData => {
    const imageData: ImageDataType = array.find(
      (node: { node: { name: string; childImageSharp: any } }) =>
        node.node.name === image
    );
    return imageData?.node.childImageSharp.gatsbyImageData;
  };

  return (
    <Flex grow="1">
      <GatsbyImage alt={altText} image={findImage(image)} />
    </Flex>
  );
};

type CardFooterProps = {
  children: React.ReactNode;
  tags: string[];
};

const CardFooter = ({ children, tags }: CardFooterProps) => {
  return (
    <Flex flexDir="column" gap={4} px={8} pb={8}>
      {children}
      <Divider />
      <Flex gap={2}>
        {tags.map((tag: string) => (
          <Badge key={tag} variant="subtle" colorScheme="primary">
            {tag}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};

type CardProps = {
  children: React.ReactNode;
} & FlexProps;

const Card = ({ children, ...rest }: CardProps) => {
  return (
    <Flex
      flexDir="column"
      borderWidth="1px"
      borderRadius="lg"
      h="full"
      w="full"
      bg={useColorModeValue("white", "gray.700")}
      borderColor={useColorModeValue("gray.200", "gray.600")}
      {...rest}
    >
      {children}
    </Flex>
  );
};

Card.Image = CardImage;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
