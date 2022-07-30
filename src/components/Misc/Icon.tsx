import React from "react";
import * as Icons from "@heroicons/react/outline";
import { Icon as CIcon, IconProps as CIconProps } from "@chakra-ui/react";

type IconType = keyof typeof Icons;

type IconProps = {
  icon: string;
} & CIconProps;

const Icon = ({ icon, ...rest }: IconProps) => {
  const IconComponent = Icons[icon as IconType];

  return (
    <CIcon
      as={IconComponent ?? Icons["QuestionMarkCircleIcon"]}
      boxSize={5}
      {...rest}
    />
  );
};

export default Icon;
