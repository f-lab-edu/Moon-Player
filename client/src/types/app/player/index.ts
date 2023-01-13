import { Music } from 'types/store';

export interface PlayerControlModuleState {
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
