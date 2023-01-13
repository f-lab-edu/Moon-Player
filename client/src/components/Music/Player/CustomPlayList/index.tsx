/* eslint-disable max-len */
import ScrollBox from 'components/Global/style/ScrollBox';
import styled from 'styled-components';
import CustomPlayListItem from './List/Item';
import { MusicItem } from 'components/Global/UI/MusicItem/MusicItem';
import { useAppSelector } from 'hooks/useAppDispatch';

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

export const CustomPlayList = () => {
  const isSubHeader = useAppSelector((state) => state.layout.playerHeader.header) === 'sub-header' ? true : false;

  // 서버로부터 데이터리스트들을 받아서 렌더링
  const items = datas.map((data) => <CustomPlayListItem title={data.title} key={data.id} id={data.id} />);
  // 클릭시 서버로부터 데이터 페칭해서 가져오고 렌더링 현재는 mockdata
  const playerMusicItems = playerDatas.map((data) => (
    <MusicItem name={data.name} img_url={data.img_url} id={data.id} key={data.id} />
  ));

  // 서브헤더의 존재 유무로 렌더링할 요소 지정
  return <Layout>{!isSubHeader ? items : playerMusicItems}</Layout>;
};

const Layout = styled(ScrollBox)`
  height: 30vh;
  h3 {
    font-size: 18px;
    margin-right: 10px;
  }
  div {
    font-size: 18px;
  }
  img {
    width: 64px;
    height: 64px;
  }
`;
export default CustomPlayList;
