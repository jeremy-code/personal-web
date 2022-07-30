import React from "react";
import { Link, forwardRef, LinkProps } from "@chakra-ui/react";

type NavLinkProps = {
  href: string;
  text: string;
} & LinkProps;

const SimpleNavLink = forwardRef(
  ({ href, text, ...rest }: NavLinkProps, ref) => {
    return (
      <Link color="gray.500" href={`#${href}`} ref={ref} {...rest}>
        {text}
      </Link>
    );
  }
);

export default SimpleNavLink;
