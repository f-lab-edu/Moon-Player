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
      <MusicImage img={img_url} />
      <MusicTitle color="rgba(255,255,255,0.84)">{name}</MusicTitle>
      <IconButton
        color="rgba(255,255,255,0.76)"
        active={isInPlayer}
        onClick={handleAddMusic}
        name="circlePlus"
        size="2x"
      ></IconButton>
    </Layout>
  );
};

const Layout = styled(Flex)`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);

  color: rgba(255, 255, 255, 0.64);

  font-weight: 700;
  gap: 30px;

  &:last-child {
    border-bottom: none;
  }
`;

const MusicImage = styled(Image)`
  width: 128px;
  height: 72px;
  object-fit: cover;
`;

const MusicTitle = styled(OverFlowText)`
  flex: 1;
  font-size: 16px;
`;

export default Item;
