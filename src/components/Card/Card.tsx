import React from "react";
import { Flex, Image as CImage, Divider, Badge, FlexProps } from "@chakra-ui/react";

type CardContentProps = {
  children: React.ReactNode;
} & FlexProps;

const CardContent = ({ children, ...rest }: CardContentProps) => {
  return (
    <Flex flexGrow={1} flexDir="column" p={8} h="full" w="full" gap={4} {...rest}>
      {children}
    </Flex>
  );
};

type CardImageProps = {
  image?: string;
  altText?: string;
};

const CardImage = ({ image, altText }: CardImageProps) => {
  return (
    <CImage
      height="200px"
      borderTopRadius="lg"
      objectFit="cover"
      draggable="false"
      src={image}
      alt={altText}
    />
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
          <Badge key={tag} variant="subtle" colorScheme="teal">
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
    <Flex flexDir="column" borderWidth="1px" borderRadius="lg" h="full" w="full" {...rest}>
      {children}
    </Flex>
  );
};

Card.Image = CardImage;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
