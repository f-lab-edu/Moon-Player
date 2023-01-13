import { Music } from 'types/store';
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
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
export interface PlayerControl {
  playing: boolean;
  ismuted: boolean; // 음소거인지
  controls: boolean; // 기본으로 제공되는 컨트롤러 사용할건지
  volume: number; // 볼륨크기
  playbackRate: number; // 배속
  played: number; // 재생의 정도 (value)
  seeking: boolean; // 재생바를 움직이고 있는지
  duration: number; // 전체 시간
  music: Music;
  isrepeat: boolean;
  currentTime: string;
  endTime: string;
}
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
  down: faChevronDown,
};
type FontAweSomeIconType = keyof typeof FontAwesomeIcons;
export interface IconType {
  name: FontAweSomeIconType;
  size: FontAwesomeIconProps['size'];
  color: string;
}
