/* eslint-disable indent */
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import {
  handleAddMusicListUI,
  handleMyMusicListUI,
  handleOpenMusicFooterUI,
  handleOpenCustomPlayListUI,
} from 'store/feature/layout/LayoutSlice';

export const useUIControl = () => {
  const isOpenCustomPlayListUI = useAppSelector((state) => state.layout.music.customPlayList.isOpen);
  const isOpenAddMusicListUI = useAppSelector((state) => state.layout.music.customPlayList.addMusicList.isOpen);
  const isOpenMyMusicListUI = useAppSelector((state) => state.layout.music.customPlayList.myMusicList.isOpen);
  const isOpenMusicFooterUI = useAppSelector((state) => state.layout.music.footer.isOpen);
  const dispatch = useAppDispatch();
  const onhandleMusicFooterUI = (isActive: boolean) => {
    dispatch(handleOpenMusicFooterUI(isActive));
  };
  const onhandleAddMusicListUI = (isActive: boolean) => {
    dispatch(handleAddMusicListUI(isActive));
  };
  const onhandleMyMusicListUi = (isActive: boolean) => {
    dispatch(handleMyMusicListUI(isActive));
  };
  const onhandleCustomPlayListUI = (isActive: boolean) => {
    dispatch(handleOpenCustomPlayListUI(isActive));
  };

  return {
    isOpenMusicFooterUI,
    isOpenAddMusicListUI,
    isOpenMyMusicListUI,
    isOpenCustomPlayListUI,
    onhandleMusicFooterUI,
    onhandleMyMusicListUi,
    onhandleAddMusicListUI,
    onhandleCustomPlayListUI,
  };
};

export default useUIControl;
