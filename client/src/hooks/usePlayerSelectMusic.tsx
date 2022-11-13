import { useDispatch } from 'react-redux';
import { handleNextMusic, handlePrevMusic, handleShuffleMusics } from 'store/feature/music/PlayerSlice';
import { nextPlayMusic, prevPlayMusic, shuffleMusic } from 'utils/Player';
import { useMusicSelector } from './useMusicSelector';
export const usePlayerSelectMusic = () => {
  const dispatch = useDispatch();
  const [, , playerSelector] = useMusicSelector();
  const onPrevMusic = () =>
    dispatch(handlePrevMusic(prevPlayMusic(playerSelector.playerItems, playerSelector.playmusic)));

  const onNextMusic = () =>
    dispatch(handleNextMusic(nextPlayMusic(playerSelector.playerItems, playerSelector.playmusic)));
  const onShuffleMusic = () => dispatch(handleShuffleMusics(shuffleMusic(playerSelector.playerItems)));

  return { onPrevMusic, onNextMusic, onShuffleMusic };
};
export default usePlayerSelectMusic;
