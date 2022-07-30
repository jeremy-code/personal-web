import React from "react";

import SimpleNavLink from "./SimpleNavLink";

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById(href);
    // due to fixed navbar, have to move off by 50px
    const y = element!.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <SimpleNavLink text={text} href={href} onClick={handleClick} />
    </>
  );
};

export default NavLink;
