import styled from 'styled-components';
import { useEffect } from 'react';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import PlaylistItem from 'components/Music/PlayList/Item/Item';
import ScrollBox from 'components/Global/style/ScrollBox';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';

export const PlayList = () => {
  const dispatch = useAppDispatch();
  const { music_list } = useAppSelector((state) => state.music.playList.genre);
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
  width: 90%;
  border-radius: 7px;

  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.12));
  margin-bottom: 12px;
  margin: 0 auto;
`;
export default PlayList;
