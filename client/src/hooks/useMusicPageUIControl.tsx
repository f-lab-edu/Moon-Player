/* eslint-disable indent */
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import {
  handleOpenMyPlayListUI,
  handleOpenAddPlayListUI,
  handleOpenMusicFooterUI,
  handleOpenCustomPlayListUI,
} from 'store/feature/layout/LayoutSlice';

export const useMusicPageUIControl = () => {
  const dispatch = useAppDispatch();
  const isOpenCustomPlayListUI = useAppSelector((state) => state.layout.music.customPlayList.isOpen);
  const isOpenAddMusicListUI = useAppSelector((state) => state.layout.music.customPlayList.addMusicList.isOpen);
  const isOpenMyMusicListUI = useAppSelector((state) => state.layout.music.customPlayList.myMusicList.isOpen);
  const isOpenMusicFooterUI = useAppSelector((state) => state.layout.music.footer.isOpen);

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
    isOpenMusicFooterUI,
    isOpenAddMusicListUI,
    isOpenMyMusicListUI,
    isOpenCustomPlayListUI,
    onhandleOpenMusicFooterUI,
    onhandleOpenMyPlayListUI,
    onhandleOpenAddPlayListUI,
    onhandleOpenCustomPlayListUI,
  };
};

export default useMusicPageUIControl;
