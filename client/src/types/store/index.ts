import { PlayerControlModuleType } from '../app/player/index';
import { GenreDataType } from 'types/app/genre';
import { MusicDataType } from '../app/data/index';
import { PlayListType } from '../app/playList/index';
import { authTokenType } from '../app/auth/index';

export interface PlayerStateType {
  list: Array<MusicDataType>;
  playingMusic: MusicDataType;
  playerControlModuleState: PlayerControlModuleType;
}

//  비동기 데이터
export interface GenreStateType {
  list: Array<GenreDataType>;
  status: string;
}

export interface PlayListStateType {
  genre: PlayListType;
  status: string;
}

export interface LayoutStateType {
  music: {
    musicList: {
      isOpen: boolean;
    };
    playerList: {
      isOpen: boolean;
    };
    customPlayList: {
      isOpen: boolean;
      addMusicList: {
        isOpen: boolean;
      };
      myMusicList: {
        isOpen: boolean;
      };
    };

    footer: {
      isOpen: boolean;
    };
  };
}
export interface UserStateType {
  status: string;
  info: string;
  data: authTokenType;
}
