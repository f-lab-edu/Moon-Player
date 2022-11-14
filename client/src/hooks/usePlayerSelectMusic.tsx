import { handleNextMusic, handlePrevMusic, handleShuffleMusics } from 'store/feature/music/PlayerSlice';
import { nextPlayMusic, prevPlayMusic, shuffleMusic } from 'utils/Player';
import { useMusicSelector } from './useMusicSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
export const usePlayerSelectMusic = () => {
  const dispatch = useAppDispatch();
  const [, , playerSelector] = useMusicSelector();
  const onPrevMusic = () =>
    dispatch(handlePrevMusic(prevPlayMusic(playerSelector.playerItems, playerSelector.playmusic)));

  const onNextMusic = () =>
    dispatch(handleNextMusic(nextPlayMusic(playerSelector.playerItems, playerSelector.playmusic)));
  const onShuffleMusic = () => dispatch(handleShuffleMusics(shuffleMusic(playerSelector.playerItems)));

  return { onPrevMusic, onNextMusic, onShuffleMusic };
};
export default usePlayerSelectMusic;
