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

  return (
    <Layout>
      <PlayListTitle>{genre_title}</PlayListTitle>
      {playListMusics}
    </Layout>
  );
};

const Layout = styled(ScrollBox)`
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
  font-size: 20px;
`;

export default PlayList;
