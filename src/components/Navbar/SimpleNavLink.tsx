import React, { forwardRef } from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";
import type { LinkProps } from "@chakra-ui/react";

type NavLinkProps = {
  href: string;
  text: string;
} & LinkProps;

const SimpleNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const { href, text, ...rest } = props;

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
