import styled from 'styled-components';
import { useEffect } from 'react';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Music from 'components/Music/PlayList/Item/Item';
import ScrollBox from 'components/Global/style/ScrollBox';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxStore';
import PlayListHeader from '../MusicListHeader/index';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';
export const PlayList = () => {
  const dispatch = useAppDispatch();
  const { music_list } = useAppSelector((state) => state.music.playList.genre);
  const { isOpenMusicListUI } = useMusicPageUIControl();

  const playListMusics =
    music_list &&
    music_list.map(({ name, id, img_url, source_url }) => (
      <Music key={id} id={id} name={name} img_url={img_url} source_url={source_url}></Music>
    ));

  useEffect(() => {
    if (music_list.length) return;
    dispatch(fetchmusicList('http://localhost:4000/api/music/genre/1'));
  }, []);

  return (
    <Layout active={isOpenMusicListUI}>
      <PlayListHeader title="M U S I C" />
      {playListMusics}
    </Layout>
  );
};
interface LayoutProps {
  active: boolean;
}

const Layout = styled(ScrollBox)<LayoutProps>(
  ({ active = true }) => `
  width: 100%;
  border-radius: 7px;
  margin-top: 15px;
  margin-right: 15px;
  padding: 15px;
  height: 100vh;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.12));
  display: ${!active ? 'none' : 'block'};  
 
`
);
export default PlayList;
