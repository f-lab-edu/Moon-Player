import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import { Item } from './Item';
import { Title } from 'components/Common/Title';
import { ScrollBox } from 'components/Common/ScrollBox';
const Root = styled(ScrollBox)`
  width: 70%;
  height: 100vh;
  box-shadow: ${({ theme }) => theme.boxShadows.container};
  margin: 0px 40px;
`;

const Box = styled.div`
  padding: 10px 20px;
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
        <Title color="white">{playListItems.title}</Title>
        {items}
      </Box>
    </Root>
  );
};
export default Container;
