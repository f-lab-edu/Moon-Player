import styled from 'styled-components';

import { handleRemoveMusic, handleAddMusic } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Global/style/OverFlowText';
import Image from 'components/Global/style/Image';
import Flex from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { Music } from 'types/store';
import { useModal } from 'hooks/useModal';

export const Item = ({ name, img_url, id, source_url }: Music) => {
  const dispatch = useAppDispatch();
  const { onAlarmOpen } = useModal();
  const playerSelector = useAppSelector((state) => state.music.player);
  const isCurrentMusic = playerSelector.music.name === name ? true : false;
  const handleRemoveButton = () => {
    return isCurrentMusic ? onAlarmOpen('현재 재생중인 음악은 삭제할수없습니다.') : dispatch(handleRemoveMusic(name));
  };

  const handlePlayMusic = () => {
    const currentMusic = { name, img_url, id, source_url };
    dispatch(handleAddMusic(currentMusic));
  };

  return (
    <Layout
      onClick={handlePlayMusic}
      isActive={isCurrentMusic}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <MusicNumber>{id}</MusicNumber>
      <MusicImage img={img_url} />
      <MusicTitle>{name}</MusicTitle>
      <IconButton color="rgba(255,255,255,0.64)" onClick={handleRemoveButton} size="1x" name="trash" />
    </Layout>
  );
};
interface RootProps {
  isActive: boolean;
}
const Layout = styled(Flex)<RootProps>`
  padding: 0px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  background-color: ${({ isActive }) => (isActive ? 'rgba(0,0,0,0.64)' : 'none')};
  gap: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  &:last-child {
    border-bottom: none;
  }
  height: 84px;
  overflow: hidden;
`;

const MusicNumber = styled(Text)`
  color: rgba(255, 255, 255, 0.64);
  font-size: 16px;
  width: 16px;
`;

const MusicTitle = styled(OverFlowText)`
  flex: 1;
  font-size: 14px;
  max-height: 48px;
  color: rgba(255, 255, 255, 0.84);
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
`;
const MusicImage = styled(Image)`
  width: 64px;
  height: 64px;
`;

export default Item;
