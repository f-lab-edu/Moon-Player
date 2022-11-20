type PlayerState = {
  playerItems: Array<MusicDataType>;
  playmusic: MusicDataType;
};

//  비동기 데이터
type GenreState = {
  musicList: Array<GenreDataType>;
  status: string;
};

type PlayListState = {
  musicList: PlayListDataType;
  status: string;
};

type GenreDataType = {
  genre: string;
  genre_img: string;
  genre_id: number;
};

type PlayListDataType = {
  title: string;
  id: number;
  musics: Array<MusicDataType>;
};

type LayoutState = {
  alarm: alarmDataType;
};

type alarmDataType = {
  isOpen: boolean;
  text: string;
};

type MusicDataType = {
  video_link: string;
  video_title: string;
  video_img: string;
  id: number;
};
type UserState = {
  status: string;
  GoogleUserinfo: GoogleUser;
};

type GoogleUser = {
  email: string;
  id: number;
  picture: string;
  verified_email: boolean;
};
export type {
  MusicDataType,
  GenreDataType,
  GenreState,
  PlayerState,
  PlayListState,
  LayoutState,
  alarmDataType,
  PlayListDataType,
  UserState,
  GoogleUser,
};
