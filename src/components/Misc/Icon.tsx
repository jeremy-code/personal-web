import React, { forwardRef } from "react";
import * as Icons from "@heroicons/react/outline";
import { Icon as CIcon, IconProps as CIconProps } from "@chakra-ui/react";

type IconType = keyof typeof Icons;

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

// ));

// ({ icon, ...rest }: IconProps) => {
//   const IconComponent = Icons[icon as IconType];

//   return (
//     <CIcon
//       as={IconComponent ?? Icons["QuestionMarkCircleIcon"]}
//       boxSize={5}
//       {...rest}
//     />
//   );
// };
export default Icon;
