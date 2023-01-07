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
interface ItemProps {
  name: string;
  img_url: string;
  number: number;
}

export const Item = ({ name, img_url, number }: ItemProps) => {
  const { element, handleScrollElement } = useMoveDownScroll();
  const { handleOpen } = useAlarm();

  const dispatch = useAppDispatch();
  const playerSelector = useAppSelector((state) => state.music.player);
  const isCurrentMusic = playerSelector.music.name === name ? true : false;
  const currentPlayerItemslength = playerSelector.list.length;
  const prevPlayerItemslength = usePrevious(currentPlayerItemslength) as number;
  useEffect(() => {
    if (prevPlayerItemslength > currentPlayerItemslength) return;
    handleScrollElement();
  }, [currentPlayerItemslength]);

  const handleRemove = () => {
    return isCurrentMusic ? handleOpen('현재 선택중인 음악은 삭제할수없습니다.') : dispatch(handleRemoveMusic(name));
  };

  const handlePlayMusic = () => {
    const selectedMusic = playerSelector.list.find((music: Music) => music.name === name);
    if (!selectedMusic) return;
    dispatch(handleAddMusic(selectedMusic));
  };

  return (
    <Root
      ref={element}
      isActive={isCurrentMusic}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      onClick={handlePlayMusic}
    >
      <MusicNumber>{number}</MusicNumber>
      <MusicImage img={img_url} />
      <MusicTitle>{name}</MusicTitle>
      <IconButton color="rgba(255,255,255,0.64)" onClick={handleRemove} size="1x" icon="trash"></IconButton>
    </Root>
  );
};
interface RootProps {
  isActive: boolean;
}
const Root = styled(Flex)<RootProps>`
  padding: 0px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.16);
  background-color: ${({ isActive }) => isActive ? 'rgba(0,0,0,0.64)' : 'none'};
  gap: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0,0,0,0.4);
  }
  &:last-child {
    border-bottom: none;
  }
  height: 84px;
  overflow: hidden;
`;

const MusicNumber = styled(Text)`
  color: rgba(255,255,255, 0.64);
  font-size: 16px;
  width: 16px;
`;
const MusicTitle = styled.div`
  flex: 1;
  font-size: 14px;
  max-height: 48px;
  color: rgba(255,255,255, 0.84);
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
