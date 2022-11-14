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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconButtonProps = {
  className?: string;
  event?: React.MouseEventHandler<HTMLButtonElement>;
  icon: string;
  size: any; // 이거 좀 봐야할듯
  color: string;
  active?: boolean;
  padding?: string;
};

type ButtonProps = {
  color: string;
  active?: boolean;
  padding?: string;
};

export const IconButton = ({ className, event, icon, size, color, active, padding }: IconButtonProps) => {
  return (
    <Button className={className} onClick={event} color={color} active={active} padding={padding}>
      <FontAwesomeIcon icon={ICON_NAME[icon]} size={size} color={color}></FontAwesomeIcon>
    </Button>
  );
};

const Button = styled.button<ButtonProps>(
  ({ active, color, padding }) => `
background: none;
border:0;
cursor:pointer;
color: ${color};
padding:${padding};
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

const ICON_NAME: { [key: string]: any } = {
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

export default IconButton;
