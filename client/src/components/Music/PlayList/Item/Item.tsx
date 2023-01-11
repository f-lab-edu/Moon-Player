import styled from 'styled-components';
import Image from 'components/Global/style/Image';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import OverFlowText from 'components/Global/style/OverFlowText';

import Flex from 'components/Global/style/Flex';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { Music } from 'types/store';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import useModal from 'hooks/useModal';
import { MusicItem } from 'components/Global/UI/MusicItem/MusicItem';

export const Item = ({ id, name, img_url, source_url }: Music) => {
  const dispatch = useAppDispatch();
  const playerSelector = useAppSelector((state) => state.music.player);
  const isInPlayer = playerSelector.list.find((music: Music) => music.name === name) ? true : false;
  const { onAlarmOpen } = useModal();

  const handleAddMusic = () => {
    if (isInPlayer) return;
    const selectedMusic = { id, name, img_url, source_url };
    onAlarmOpen('음악이 추가되었습니다.');
    dispatch(handleAddPlayer(selectedMusic));
  };

  return (
    <>
      <MusicItem name={name} img_url={img_url} id={id}>
        <IconButton
          color="rgba(255,255,255,0.76)"
          active={isInPlayer}
          onClick={handleAddMusic}
          name="circlePlus"
          size="2x"
        ></IconButton>
      </MusicItem>
    </>
  );
};

export default Item;
