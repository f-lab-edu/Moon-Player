import styled from 'styled-components';
import useMoveDownScroll from 'hooks/useMoveDownScroll';
import usePrevious from 'hooks/usePrevious';
import { handleRemoveMusic, handleAddMusic } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Global/style/OverFlowText';
import { useEffect } from 'react';
import Image from 'components/Global/style/Image';
import Flex from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { Music } from 'types/store';
import { useAlarm } from 'hooks/useAlarm';

export const Item = ({ name, img_url, id, source_url }: Music) => {
  const { element, handleScrollElement } = useMoveDownScroll();
  const dispatch = useAppDispatch();
  const { handleOpen } = useAlarm();
  const playerSelector = useAppSelector((state) => state.music.player);
  const isCurrentMusic = playerSelector.music.name === name ? true : false;
  const currentPlayerItemslength = playerSelector.list.length;
  const prevPlayerItemslength = usePrevious(currentPlayerItemslength) as number;
  useEffect(() => {
    if (prevPlayerItemslength > currentPlayerItemslength) return;
    handleScrollElement();
  }, [currentPlayerItemslength]);

  const handleRemoveButton = () => {
    return isCurrentMusic ? handleOpen('현재 재생중인 음악은 삭제할수없습니다.') : dispatch(handleRemoveMusic(name));
  };

  const handlePlayMusic = () => {
    const currentMusic = { name, img_url, id, source_url };
    dispatch(handleAddMusic(currentMusic));
  };

  return (
    <Layout ref={element} isActive={isCurrentMusic} direction="row" justifyContent="space-between" alignItems="center">
      <MusicNumber>{id}</MusicNumber>
      <MusicImage onClick={handlePlayMusic} img={img_url} />
      <MusicTitle onClick={handlePlayMusic}>{name}</MusicTitle>
      <IconButton color="white" onClick={handleRemoveButton} size="2x" name="trash"></IconButton>
    </Layout>
  );
};
interface RootProps {
  isActive: boolean;
}
const Layout = styled(Flex)<RootProps>`
  border-bottom: 1px solid white;
  background: ${({ isActive }) => isActive && 'gray'};
  opacity: ${({ isActive }) => isActive && '0.7'};
  gap: 15px;
`;

const MusicNumber = styled(Text)`
  color: white;
  font-size: 16px;
`;
const MusicTitle = styled(OverFlowText)`
  width: 60%;
  font-size: 16px;
  color: white;
  text-align: center;
  cursor: pointer;
`;
const MusicImage = styled(Image)`
  width: 100px;
  height: 50px;
`;

export default Item;
