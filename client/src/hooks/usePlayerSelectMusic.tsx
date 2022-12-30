import { handleNextMusic, handlePrevMusic, handleShuffleMusics } from 'store/feature/music/PlayerSlice';
import { nextPlayMusic, prevPlayMusic, shuffleMusic } from 'utils/app/Player';

import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
export const usePlayerSelectMusic = () => {
  const dispatch = useAppDispatch();
  const playerSelector = useAppSelector((state) => state.music.player);
  const onPrevMusic = () =>
    dispatch(handlePrevMusic(prevPlayMusic(playerSelector.playerItems, playerSelector.playmusic)));

  const onNextMusic = () =>
    dispatch(handleNextMusic(nextPlayMusic(playerSelector.playerItems, playerSelector.playmusic)));
  const onShuffleMusic = () => dispatch(handleShuffleMusics(shuffleMusic(playerSelector.playerItems)));

  return { onPrevMusic, onNextMusic, onShuffleMusic };
};
export default usePlayerSelectMusic;
