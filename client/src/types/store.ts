export interface PlayerState {
  list: Array<Music>;
  music: Music;
}

//  비동기 데이터
export interface GenreState {
  list: Array<Genre>;
  status: string;
}

export interface PlayListState {
  genre: PlayList;
  status: string;
}
export interface PlayList {
  genre_title: string;
  genre_id: number;
  music_list: Array<Music>;
}

export interface Genre {
  genre: string;
  genre_img: string;
  genre_id: number;
}

export interface LayoutState {
  alarm: Alarm;
}

export interface Alarm {
  isOpen: boolean;
  text: string;
}

export interface Music {
  source_url: string;
  name: string;
  img_url: string;
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
