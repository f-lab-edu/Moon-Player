import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import { Item } from './Item';
import { ScrollBox } from 'components/Common/ScrollBox';
import { useMusicSelector } from 'hooks/useMusicSelector';
import { Text } from 'components/Common/Text';

const Root = styled(ScrollBox)`
  width: 916px;
  height: 100vh;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid white;
  margin: 0px 40px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Box = styled.div`
  padding: 10px 20px;
`;

export const PlayList = () => {
  const dispatch = useDispatch();
  const [, playListSelector] = useMusicSelector();
  const playListMusics =
    playListSelector.musicList.musics &&
    playListSelector.musicList.musics.map(({ video_title, id, video_img }) => (
      <Item key={video_title} id={id} video_title={video_title} video_img={video_img}></Item>
    ));

  useEffect(() => {
    dispatch(fetchmusicList(1));
  }, []);

  return (
    <Root>
      <Box>
        <Text>{playListSelector.musicList.title}</Text>
        {playListMusics}
      </Box>
    </Root>
  );
};
export default PlayList;
