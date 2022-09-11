import React, { forwardRef } from "react";
import * as Icons from "@heroicons/react/24/outline";
import { Icon as CIcon } from "@chakra-ui/react";
import type { IconProps as CIconProps } from "@chakra-ui/react";

export type IconType = keyof typeof Icons;

type IconProps = {
  icon: string;
} & CIconProps;

const Icon = forwardRef(
  ({ icon, ...rest }: IconProps, ref: React.LegacyRef<SVGSVGElement>) => {
    const IconComponent = Icons[icon as IconType];

    return (
      <CIcon
        as={IconComponent ?? Icons["QuestionMarkCircleIcon"]}
        boxSize={5}
        {...rest}
        ref={ref}
      />
    );
  }
);

export default Icon;
