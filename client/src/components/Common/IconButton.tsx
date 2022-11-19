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

type IconButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: IconName;
  size: FontAwesomeIconProps['size']; // 이거 좀 봐야할듯
  color: string;
  active?: boolean;
  padding?: string;
  margin?: string;
};

type ButtonProps = {
  color: string;
  active?: boolean;
  padding?: string;
  margin?: string;
};

export const IconButton = ({ onClick, icon, size, color, active, padding, margin }: IconButtonProps) => {
  return (
    <Button onClick={onClick} color={color} active={active} padding={padding} margin={margin}>
      <FontAwesomeIcon icon={ICON_NAME[icon]} size={size} color={color}></FontAwesomeIcon>
    </Button>
  );
};

const Button = styled.button<ButtonProps>(
  ({ active, color, padding, margin }) => `
background: none;
border:0;
cursor:pointer;
color: ${color};
padding:${padding};
margin:${margin};
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
