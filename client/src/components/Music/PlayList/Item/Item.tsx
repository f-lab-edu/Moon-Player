import styled from 'styled-components';
import Image from 'components/Global/style/Image';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Global/style/OverFlowText';

import Flex from 'components/Global/style/Flex';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { Music } from 'types/store';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import useAlarm from 'hooks/useAlarm';

export const Item = ({ id, name, img_url, source_url }: Music) => {
  const dispatch = useAppDispatch();
  const playerSelector = useAppSelector((state) => state.music.player);
  const isInPlayer = playerSelector.list.find((music: Music) => music.name === name) ? true : false;
  const { handleOpen } = useAlarm();

  const handleAddMusic = () => {
    if (isInPlayer) return;
    const selectedMusic = { id, name, img_url, source_url };
    handleOpen('음악이 추가되었습니다.');
    dispatch(handleAddPlayer(selectedMusic));
  };

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <MusicId>{id}</MusicId>
      <MusicImage img={img_url} />
      <MusicTitle>{name}</MusicTitle>
      <IconButton color="white" active={isInPlayer} onClick={handleAddMusic} name="plus" size="2x"></IconButton>
    </Layout>
  );
};

const Layout = styled(Flex)`
  border: 1px solid white;
  border-left: none;
  border-right: none;
  border-bottom: none;
  color: white;
  font-weight: 700;
  gap: 30px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  > :first-child {
    width: 1px;
  }
`;
const MusicId = styled.div``;
const MusicImage = styled(Image)`
  width: 100px;
  height: 50px;
`;

const MusicTitle = styled(OverFlowText)`
  width: 50%;
  font-size: 16px;
`;

export default Item;
