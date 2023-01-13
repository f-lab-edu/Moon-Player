import styled, { CSSObject } from 'styled-components';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

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
  faMusic,
  faList,
  faClose,
  faUser,
  faRightFromBracket,
  faPlus,
  faHome,
  faSave,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

export type StyledProps = Pick<CSSObject, 'height' | 'width' | 'color' | 'fontSize' | 'textAlign' | 'cursor'>;

export const FontAwesomeIcons = {
  save: faSave,
  shuffle: faShuffle,
  home: faHome,
  backward: faBackwardStep,
  play: faPlayCircle,
  forward: faForwardStep,
  pause: faCirclePause,
  repeat: faRepeat,
  volume: faVolumeHigh,
  circlePlus: faCirclePlus,
  trash: faTrash,
  music: faMusic,
  arrowRight: faCircleArrowRight,
  arrowLeft: faCircleArrowLeft,
  list: faList,
  close: faClose,
  user: faUser,
  bracket: faRightFromBracket,
  plus: faPlus,
  down: faArrowDown,
};
type FontAweSomeIconType = keyof typeof FontAwesomeIcons;
export interface IconType {
  name: FontAweSomeIconType;
  size: FontAwesomeIconProps['size'];
  color: string;
}
