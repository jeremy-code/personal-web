import React from "react";
import {
  Link,
  forwardRef,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";

type NavLinkProps = {
  href: string;
  text: string;
} & LinkProps;

const SimpleNavLink = forwardRef(
  ({ href, text, ...rest }: NavLinkProps, ref) => {
    return (
      <Link
        color={useColorModeValue("gray.600", "gray.400")}
        href={`#${href}`}
        ref={ref}
        {...rest}
      >
        {text}
      </Link>
    );
  }
);

export default SimpleNavLink;
