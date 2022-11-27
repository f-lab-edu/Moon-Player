import styled from 'styled-components';
import { useEffect } from 'react';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import PlaylistItem from 'components/Music/PlayList/Item';
import ScrollBox from 'components/Global/ScrollBox';
import Text from 'components/Global/Text';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';

export const PlayList = () => {
  const dispatch = useAppDispatch();
  const { musics, title } = useAppSelector((state) => state.music.playList.musicList);
  const playListMusics =
    musics &&
    musics.map(({ video_title, id, video_img }) => (
      <PlaylistItem key={id} id={id} video_title={video_title} video_img={video_img}></PlaylistItem>
    ));

  useEffect(() => {
    dispatch(fetchmusicList('http://localhost:4000/api/music/genre/1'));
  }, []);

  return (
    <Root>
      <PlayListTitle>{title}</PlayListTitle>
      {playListMusics}
    </Root>
  );
};

const Root = styled(ScrollBox)`
  width: 70%;
  height: 100vh;
  border-radius: 7px;
  border: 1px solid white;
  margin: 0px 40px;
  padding: 10px 15px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const PlayListTitle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export default PlayList;
