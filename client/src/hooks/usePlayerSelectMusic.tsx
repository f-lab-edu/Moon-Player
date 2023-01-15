import { handleNextPlayMusic, handlePrevPlayMusic, handleShuffleMusics } from 'store/feature/music/PlayerSlice';
import { nextSelctedMusic, prevSelctedMusic, shuffleMusic } from 'utils/app/Player';

import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
export const usePlayerSelectMusic = () => {
  const dispatch = useAppDispatch();
  const playerSelector = useAppSelector((state) => state.music.player);
  const handlePrevPlayingMusic = () =>
    dispatch(handlePrevPlayMusic(prevSelctedMusic(playerSelector.list, playerSelector.playingMusic)));

  const handleNextPlayingMusic = () =>
    dispatch(handleNextPlayMusic(nextSelctedMusic(playerSelector.list, playerSelector.playingMusic)));
  const handleShuffleMusic = () => dispatch(handleShuffleMusics(shuffleMusic(playerSelector.list)));

  return { handlePrevPlayingMusic, handleNextPlayingMusic, handleShuffleMusic };
};
export default usePlayerSelectMusic;
