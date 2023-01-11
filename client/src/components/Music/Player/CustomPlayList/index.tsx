import ScrollBox from 'components/Global/style/ScrollBox';
import { useState } from 'react';
import styled from 'styled-components';
import CustomPlayListItem from './List/Item';
import { MusicItem } from 'components/Global/UI/MusicItem/MusicItem';

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

export const CustomPlayList = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleOpenUI = () => {
    setisOpen(!isOpen);
  };

  const items = datas.map((data) => (
    <CustomPlayListItem title={data.title} key={data.id} id={data.id} onhandleOpenUI={handleOpenUI} />
  ));
  // 클릭시 서버로부터 데이터 페칭해서 가져오고 렌더링
  const playerMusicItems = playerDatas.map((data) => (
    <MusicItem name={data.name} img_url={data.img_url} id={data.id} key={data.id} />
  ));

  return <Layout>{!isOpen ? items : playerMusicItems}</Layout>;
};

const Layout = styled(ScrollBox)`
  height: 30vh;
  padding-right: 10px;
`;
export default CustomPlayList;
