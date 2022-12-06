import styled from 'styled-components';
import {
  faShuffle,
  faBackwardStep,
  faPlayCircle,
  faForwardStep,
  faCirclePause,
  faRepeat,
  faVolumeHigh,
  faCirclePlus,
  faTrash,
  faCircleArrowRight,
  faCircleArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { StyledProps } from 'types/app';
import { forwardRef } from 'react';

const FontAwesomeIcons = {
  shuffle: faShuffle,
  backward: faBackwardStep,
  play: faPlayCircle,
  forward: faForwardStep,
  pause: faCirclePause,
  repeat: faRepeat,
  volume: faVolumeHigh,
  plus: faCirclePlus,
  trash: faTrash,
  arrowRight: faCircleArrowRight,
  arrowLeft: faCircleArrowLeft,
};

type FontAweSomeIcon = keyof typeof FontAwesomeIcons;
interface IconButtonProps extends StyledProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: FontAweSomeIcon;
  size: FontAwesomeIconProps['size'];
  active?: boolean;
  className?: string;
  ref?: HTMLButtonElement;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ onClick, icon, size, color, active, className }, ref) => {
    return (
      <Button ref={ref} className={className} onClick={onClick} color={color} active={active}>
        <FontAwesomeIcon icon={FontAwesomeIcons[icon]} size={size} color={color}></FontAwesomeIcon>
      </Button>
    );
  }
);
interface ButtonProps extends StyledProps {
  active?: boolean;
}
const Button = styled.button<ButtonProps>(
  ({ active = false, color }) => `
background: none;
border:0;
cursor:pointer;
color: ${color};
pointer-events:${active ? 'none' : 'auto'};
opacity:${active ? 0.5 : 1};
&:hover {
  transform: scale(1.3);
}
`
);
export default IconButton;
