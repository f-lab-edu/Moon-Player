export type PlayerState = {
  playerItems: Array<Music>;
  playmusic: Music;
};

//  비동기 데이터
export type GenreState = {
  musicList: Array<Genre>;
  status: string;
};

export type PlayListState = {
  musicList: PlayList;
  status: string;
};

export type Genre = {
  genre: string;
  genre_img: string;
  genre_id: number;
};

export type PlayList = {
  title: string;
  id: number;
  musics: Array<Music>;
};

export type LayoutState = {
  alarm: Alarm;
};

export type Alarm = {
  isOpen: boolean;
  text: string;
};

export type Music = {
  video_link: string;
  video_title: string;
  video_img: string;
  id: number;
};
export type UserState = {
  status: string;
  GoogleUserinfo: GoogleUser;
};

export type GoogleUser = {
  email: string;
  id: number;
  picture: string;
  verified_email: boolean;
};
