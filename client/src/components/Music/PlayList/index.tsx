import styled from 'styled-components';
import { useEffect } from 'react';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Music from 'components/Music/PlayList/Item/Item';
import ScrollBox from 'components/Global/style/ScrollBox';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import Text from 'components/Global/style/Text';
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
      <Title>M U S I C L I S T</Title>
      {playListMusics}
    </Layout>
  );
};

const Layout = styled(ScrollBox)`
  width: 70%;
  border-radius: 7px;
  margin-top: 15px;
  margin-right: 15px;
  padding: 15px;
  height: 74vh;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.12));
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Title = styled(Text)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.64);
  margin: 8px 0;
  font-weight: normal;
`;
export default PlayList;
