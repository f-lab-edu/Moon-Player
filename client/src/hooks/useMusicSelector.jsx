import { shallowEqual, useSelector } from 'react-redux';
export const useMusicSelector = () => {
  return useSelector((state) => [state.music.genre, state.music.playList, state.music.player], shallowEqual);
  // 배열이 계속 생성되는것을 방지하기위해 shallowEqual사용
};
