import { MusicDataType } from 'types/app/data/index';
export interface PlayListType {
  genre_title: string;
  genre_id: number;
  music_list: Array<MusicDataType>;
}
