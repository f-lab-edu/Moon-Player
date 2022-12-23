export interface PlayerState {
  playerItems: Array<Music>;
  playmusic: Music;
}

//  비동기 데이터
export interface GenreState {
  musicList: Array<Genre>;
  status: string;
}

export interface PlayListState {
  musicList: PlayList;
  status: string;
}

export interface Genre {
  genre: string;
  genre_img: string;
  genre_id: number;
}

export interface PlayList {
  title: string;
  id: number;
  musics: Array<Music>;
}

export interface LayoutState {
  alarm: Alarm;
}

export interface Alarm {
  isOpen: boolean;
  text: string;
}

export interface Music {
  video_link: string;
  video_title: string;
  video_img: string;
  id: number;
}
export interface UserState {
  status: string;
  info: string;
  data: Token;
}

export interface Token {
  access_token: string;
  expires_in: number;
  id_token: string;
  scope: string;
  token_type: string;
  refresh_token?: string;
  refresh_token_expires_in?: string;
}
export interface GoogleUser {
  email: string;
  id: number;
  picture: string;
  verified_email: boolean;
}
