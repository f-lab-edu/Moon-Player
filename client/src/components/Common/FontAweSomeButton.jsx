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
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FontAweSomeButton = ({ className, event, icon, size, color, active, padding }) => {
  return (
    <IconButton className={className} onClick={event} color={color} active={active} padding={padding}>
      <FontAwesomeIcon icon={ICON_NAME[icon]} size={size} color={color}></FontAwesomeIcon>
    </IconButton>
  );
};

const IconButton = styled.button(
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

IconButton.defaultProps = {
  active: false,
  color: 'white',
};

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
  arrowRight: faArrowRight,
  arrowLeft: faArrowLeft,
};

export default FontAweSomeButton;
