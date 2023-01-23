import styled from 'styled-components';
import { useEffect } from 'react';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Music from 'components/Music/PlayList/Item/Item';
import ScrollBox from 'components/Global/style/ScrollBox';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxStore';
import DeskTopHeader from '../Header/Desktop/index';
export const PlayList = () => {
  const dispatch = useAppDispatch();
  const { music_list } = useAppSelector((state) => state.music.playList.genre);

  const playListMusics =
    music_list &&
    music_list.map(({ name, id, img_url, source_url }) => (
      <Music key={id} id={id} name={name} img_url={img_url} source_url={source_url}></Music>
    ));

  useEffect(() => {
    dispatch(fetchmusicList('http://localhost:4000/api/music/genre/1'));
  }, []);

  return (
    <Layout>
      <DeskTopHeader title="M U S I C L I S T" />
      {playListMusics}
    </Layout>
  );
};

const Layout = styled(ScrollBox)`
  border-radius: 7px;
  margin-top: 15px;
  margin-right: 15px;
  padding: 15px;
  height: 100vh;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.12));
`;

export default PlayList;
