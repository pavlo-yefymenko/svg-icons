import { SvgIcon, SvgIconProps } from "@mui/material";
import { type IconName } from "@/icon-name";
import href from "@/assets/icons/sprite.svg";

export { type IconName };

interface IconProps extends SvgIconProps {
  name: IconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
  return (
    <SvgIcon {...props}>
      <use href={`${href}#${name}`} />
    </SvgIcon>
  );
};
