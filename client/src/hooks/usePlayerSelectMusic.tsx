import { handleNextMusic, handlePrevMusic, handleShuffleMusics } from 'store/feature/music/PlayerSlice';
import { nextPlayMusic, prevPlayMusic, shuffleMusic } from 'utils/app/Player';

import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
export const usePlayerSelectMusic = () => {
  const dispatch = useAppDispatch();
  const playerSelector = useAppSelector((state) => state.music.player);
  const onPrevMusic = () => dispatch(handlePrevMusic(prevPlayMusic(playerSelector.list, playerSelector.music)));

  const onNextMusic = () => dispatch(handleNextMusic(nextPlayMusic(playerSelector.list, playerSelector.music)));
  const onShuffleMusic = () => dispatch(handleShuffleMusics(shuffleMusic(playerSelector.list)));

  return { onPrevMusic, onNextMusic, onShuffleMusic };
};
export default usePlayerSelectMusic;
