import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import PlayListMusic from 'components/Music/PlayList/Music';
import { ScrollBox } from 'components/Common/ScrollBox';
import { useMusicSelector } from 'hooks/useMusicSelector';
import PlayListTitle from 'components/Common/Text';

const Root = styled(ScrollBox)`
  width: 916px;
  height: 100vh;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid white;
  margin: 0px 40px;
  padding: 10px 20px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const PlayList = () => {
  const dispatch = useDispatch();
  const [, playListSelector] = useMusicSelector();
  const playListMusics =
    playListSelector.musicList.musics &&
    playListSelector.musicList.musics.map(({ video_title, id, video_img }) => (
      <PlayListMusic key={video_title} id={id} video_title={video_title} video_img={video_img}></PlayListMusic>
    ));

  useEffect(() => {
    dispatch(fetchmusicList(1));
  }, []);

  return (
    <Root>
      <PlayListTitle>{playListSelector.musicList.title}</PlayListTitle>
      {playListMusics}
    </Root>
  );
};
export default PlayList;
