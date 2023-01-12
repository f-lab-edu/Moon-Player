import styled from 'styled-components';

import { handleRemoveMusic, handleAddMusic } from 'store/feature/music/PlayerSlice';

import IconButton from 'components/Global/UI/IconButton/IconButton';
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { Music } from 'types/store';
import { useModal } from 'hooks/useModal';
import { MusicItem } from 'components/Global/UI/MusicItem/MusicItem';

export const Item = ({ name, img_url, id, source_url }: Music) => {
  const dispatch = useAppDispatch();
  const { onOpenAlarm } = useModal();
  const playerSelector = useAppSelector((state) => state.music.player);
  const isCurrentMusic = playerSelector.music.name === name ? true : false;

  const handleRemoveButton = () => {
    return isCurrentMusic ? onOpenAlarm('현재 재생중인 음악은 삭제할수없습니다.') : dispatch(handleRemoveMusic(name));
  };

  const handlePlayMusic = () => {
    const currentMusic = { name, img_url, id, source_url };
    dispatch(handleAddMusic(currentMusic));
  };

  return (
    <Layout onClick={handlePlayMusic} isActive={isCurrentMusic}>
      <MusicItem id={id} img_url={img_url} name={name}>
        <IconButton color="rgba(255,255,255,0.64)" onClick={handleRemoveButton} size="1x" name="trash" />
      </MusicItem>
    </Layout>
  );
};
interface RootProps {
  isActive: boolean;
}
const Layout = styled.div<RootProps>`
  background-color: ${({ isActive }) => (isActive ? 'rgba(0,0,0,0.64)' : 'none')};
`;

export default Item;
