/* eslint-disable indent */
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import {
  handleOpenMyPlayListUI,
  handleOpenAddPlayListUI,
  handleOpenMusicFooterUI,
  handleOpenCustomPlayListUI,
  handleOpenMusicInfoUI,
} from 'store/feature/layout/LayoutSlice';

export const useUIControl = () => {
  const dispatch = useAppDispatch();
  const isOpenCustomPlayListUI = useAppSelector((state) => state.layout.music.customPlayList.isOpen);
  const isOpenAddMusicListUI = useAppSelector((state) => state.layout.music.customPlayList.addMusicList.isOpen);
  const isOpenMyMusicListUI = useAppSelector((state) => state.layout.music.customPlayList.myMusicList.isOpen);
  const isOpenMusicFooterUI = useAppSelector((state) => state.layout.music.footer.isOpen);
  const isOpenMusicInfoUI = useAppSelector((state) => state.layout.music.musicDialog.isOpen);

  const onhandleOpenMusicInfoUI = (isActive: boolean) => {
    dispatch(handleOpenMusicInfoUI(isActive));
  };
  const onhandleOpenMusicFooterUI = (isActive: boolean) => {
    dispatch(handleOpenMusicFooterUI(isActive));
  };
  const onhandleOpenAddPlayListUI = (isActive: boolean) => {
    dispatch(handleOpenAddPlayListUI(isActive));
  };
  const onhandleOpenMyPlayListUI = (isActive: boolean) => {
    dispatch(handleOpenMyPlayListUI(isActive));
  };
  const onhandleOpenCustomPlayListUI = (isActive: boolean) => {
    dispatch(handleOpenCustomPlayListUI(isActive));
  };

  return {
    isOpenMusicInfoUI,
    isOpenMusicFooterUI,
    isOpenAddMusicListUI,
    isOpenMyMusicListUI,
    isOpenCustomPlayListUI,
    onhandleOpenMusicFooterUI,
    onhandleOpenMyPlayListUI,
    onhandleOpenAddPlayListUI,
    onhandleOpenCustomPlayListUI,
    onhandleOpenMusicInfoUI,
  };
};

export default useUIControl;
