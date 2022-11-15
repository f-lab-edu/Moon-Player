type PlayerState = {
  playerItems: MusicDataType[];
  playmusic: MusicDataType | string;
};

//  비동기 데이터
type GenreState = {
  musicList?: object[];
  status: string;
};
// 비동기 데이터
type PlayListState = {
  musicList?: object[];
  status: string;
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

// 아직 사용 안함
// type GenreDataType = { genre: string; genre_img: string; genre_id: number };
// type PlayListDataType = {
//   musicList: {
//     title: string;
//     id: number;
//   };
//   musics?: MusicDataType[];
// };

export type { MusicDataType, GenreState, PlayerState, PlayListState, LayoutState, alarmDataType };
