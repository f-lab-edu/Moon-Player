import styled from 'styled-components';
import { useEffect } from 'react';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Music from 'components/Music/PlayList/Item';
import { ScrollBox } from 'components/Common/ScrollBox';
import PlayListTitle from 'components/Common/Text';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';

type ItemProps = {
  video_title: string;
  id: number;
  video_img: string;
};
export const PlayList = () => {
  const dispatch = useAppDispatch();
  const playListSelector = useAppSelector((state) => state.music.playList);
  const playListMusics =
    playListSelector.musicList.musics &&
    playListSelector.musicList.musics.map(({ video_title, id, video_img }: ItemProps) => (
      <Music key={id} id={id} video_title={video_title} video_img={video_img}></Music>
    ));

  useEffect(() => {
    dispatch(fetchmusicList('http://localhost:4000/api/music/genre/1'));
  }, []);

  return (
    <Root>
      <PlayListTitle color="white" fontSize="20px">
        {playListSelector.musicList.title}
      </PlayListTitle>
      {playListMusics}
    </Root>
  );
};

const Root = styled(ScrollBox)`
  width: 916px;
  height: 100vh;
  border-radius: 7px;
  border: 1px solid white;
  margin: 0px 40px;
  padding: 10px 15px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export default PlayList;
