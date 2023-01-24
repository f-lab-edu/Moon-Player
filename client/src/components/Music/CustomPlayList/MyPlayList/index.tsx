/* eslint-disable max-len */
import ScrollBox from 'components/Global/style/ScrollBox';
import styled from 'styled-components';
import DataListItem from './Item/Item';
import Music from 'components/Global/UI/Music/Music';

import { useState } from 'react';
import AddPlayListHeader from '../Header/AddPlayList/Header';
import MyPlayListHeader from '../Header/MyPlayList/Header';

const datas = [
  { title: '안녕하세요', id: 1 },
  { title: '안녕하세요', id: 2 },
  { title: '안녕sdfsdf', id: 3 },
  { title: '안녕sdfsdf', id: 4 },
  { title: '안녕sdfsdf', id: 5 },
  { title: '안녕sdfsdf', id: 6 },
  { title: '안녕sdfsdf', id: 7 },
];

const playerDatas = [
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 101,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 102,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 103,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      // eslint-disable-next-line max-len
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 104,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 105,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 106,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 107,
  },
];

export const MyPlayList = () => {
  // 서버로부터 데이터리스트들을 받아서 렌더링
  const [activeMyPlayListUI, setActiveMyPlayListUI] = useState(false);

  const userPlayList = datas.map((data) => (
    <DataListItem
      title={data.title}
      key={data.id}
      id={data.id}
      onUIHandle={() => setActiveMyPlayListUI(!activeMyPlayListUI)}
    />
  ));
  // 클릭시 서버로부터 데이터 페칭해서 가져오고 렌더링 현재는 mockdata
  const userplayListMusics = playerDatas.map((data) => (
    <Music name={data.name} img_url={data.img_url} id={data.id} key={data.id} />
  ));

  return (
    <>
      {!activeMyPlayListUI ? (
        <AddPlayListHeader title="나만의 플레이리스트 목록" />
      ) : (
        <MyPlayListHeader onUIhandle={() => setActiveMyPlayListUI(!activeMyPlayListUI)} />
      )}
      <MusicList>{!activeMyPlayListUI ? userPlayList : userplayListMusics}</MusicList>
    </>
  );
};

const MusicList = styled(ScrollBox)`
  height: 42vh;
  margin-top: 20px;
  h3 {
    font-size: 20px;
    margin-right: 10px;
  }
  div {
    font-size: 16px;
  }
  img {
    width: 64px;
    height: 64px;
  }
`;
export default MyPlayList;
