import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { MusicType } from 'types/store';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';

import Music from 'components/Global/UI/Music/Music';
export const Item = ({ id, name, img_url, source_url }: MusicType) => {
  const dispatch = useAppDispatch();
  const playerSelector = useAppSelector((state) => state.music.player);
  const isInPlayer = playerSelector.list.find((music: MusicType) => music.name === name) ? true : false;
  const handleAddMusic = () => {
    if (isInPlayer) return;
    const selectedMusic = { id, name, img_url, source_url };

    dispatch(handleAddPlayer(selectedMusic));
  };
  const handleShowMusicInfo = () => {
    // 음악에 대한 정보를 보여준다.
    console.log('123');
    return;
  };

  return (
    <>
      <Music name={name} img_url={img_url} id={id}>
        <div>
          <IconButton color="rgba(255,255,255,0.76)" name="info" size="2x" onClick={handleShowMusicInfo} />
          <IconButton
            color="rgba(255,255,255,0.76)"
            active={isInPlayer}
            onClick={handleAddMusic}
            name="circlePlus"
            size="2x"
          />
        </div>
      </Music>
    </>
  );
};

export default Item;
