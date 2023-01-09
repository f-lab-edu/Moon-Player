import styled from 'styled-components';
import { useEffect } from 'react';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import PlaylistItem from 'components/Music/PlayList/Item/Item';
import ScrollBox from 'components/Global/style/ScrollBox';
import Text from 'components/Global/style/Text';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';

export const PlayList = () => {
  const dispatch = useAppDispatch();
  const { music_list, genre_title } = useAppSelector((state) => state.music.playList.genre);
  const playListMusics =
    music_list &&
    music_list.map(({ name, id, img_url, source_url }) => (
      <PlaylistItem key={id} id={id} name={name} img_url={img_url} source_url={source_url}></PlaylistItem>
    ));

  useEffect(() => {
    dispatch(fetchmusicList('http://localhost:4000/api/music/genre/1'));
  }, []);

  return <Layout>{playListMusics}</Layout>;
};

const Layout = styled(ScrollBox)`
  width: 100%;
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.12));

  margin-right: 24px;
  padding: 12px 24px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0px;
  }
`;
export default PlayList;
