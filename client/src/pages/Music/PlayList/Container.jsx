import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import { Item } from './Item';
import { Title } from 'components/Common/Title';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100vh;
  overflow-y: scroll;
  border-radius: 7px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  margin: 0px 40px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: purple;
    border-radius: 7px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Box = styled.div`
  padding: 10px 20px;
  > :first-child {
    color: white;
    font-size: 20px;
    color: white;
    text-shadow: 2px 2px 2px gray;
  }
`;

export const Container = () => {
  const dispatch = useDispatch();
  const playListItems = useSelector((state) => state.music.playList.musicList);

  const items =
    playListItems.musics &&
    playListItems.musics.map(({ video_title, id, video_img }) => (
      <Item key={video_title} id={id} video_title={video_title} video_img={video_img}></Item>
    ));
  // 초기 렌더링시에 musicList(1) 아이템을 요청
  useEffect(() => {
    dispatch(fetchmusicList(1));
  }, []);

  return (
    <Root>
      <Box>
        <Title>{playListItems.title}</Title>
        {items}
      </Box>
    </Root>
  );
};
export default Container;
