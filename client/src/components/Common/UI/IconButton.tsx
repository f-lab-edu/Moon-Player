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
const ICON_NAME = {
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

type IconName = keyof typeof ICON_NAME;
interface IconButtonProps extends StyledProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: IconName;
  size: FontAwesomeIconProps['size'];
  active?: boolean;
  className?: string;
}

export const IconButton = ({ onClick, icon, size, color, active, className }: IconButtonProps) => {
  return (
    <Button className={className} onClick={onClick} color={color} active={active}>
      <FontAwesomeIcon icon={ICON_NAME[icon]} size={size} color={color}></FontAwesomeIcon>
    </Button>
  );
};
interface ButtonProps extends StyledProps {
  active?: boolean;
}
const Button = styled.button<ButtonProps>(
  ({ active, color }) => `
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

Button.defaultProps = {
  active: false,
};

export default IconButton;
