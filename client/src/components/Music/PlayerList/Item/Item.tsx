import styled from 'styled-components';

import { handleRemoveMusic, handleAddMusic } from 'store/feature/music/PlayerSlice';

import IconButton from 'components/Global/UI/IconButton/IconButton';
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { MusicType } from 'types/store';
import { useModal } from 'hooks/useModal';
import MusicItem from 'components/Global/UI/Music/Music';

export const Item = ({ name, img_url, id, source_url }: MusicType) => {
  const dispatch = useAppDispatch();
  const { onOpenAlarm, onOpenFooterUI } = useModal();
  const playerSelector = useAppSelector((state) => state.music.player);
  const isCurrentMusic = playerSelector.playingMusic.name === name ? true : false;

  const handleTrashButton = () => {
    return isCurrentMusic ? onOpenAlarm('현재 재생중인 음악은 삭제할수없습니다.') : dispatch(handleRemoveMusic(name));
  };

  const handlePlayMusic = () => {
    const currentMusic = { name, img_url, id, source_url };
    dispatch(handleAddMusic(currentMusic));
    // 음악재생시 footer바가 자동으로 올라오게
    onOpenFooterUI();
  };

  return (
    <Layout isActive={isCurrentMusic}>
      <MusicItem id={id} img_url={img_url} name={name} onPlayMusic={handlePlayMusic}>
        <IconButton color="rgba(255,255,255,0.64)" onClick={handleTrashButton} size="1x" name="trash" />
      </MusicItem>
    </Layout>
  );
};
interface RootProps {
  isActive: boolean;
}
const Layout = styled.div<RootProps>`
  background-color: ${({ isActive }) => (isActive ? 'rgba(0,0,0,0.64)' : 'none')};
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  img {
    width: 100px;
    height: 90px;
  }
`;

export default Item;
