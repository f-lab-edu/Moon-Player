/* eslint-disable indent */
import { useAppSelector, useAppDispatch } from 'hooks/useReduxStore';
import {
  handleOpenMyPlayListUI,
  handleOpenAddPlayListUI,
  handleOpenMusicFooterUI,
  handleOpenCustomPlayListUI,
  handlePlayListUI,
  handleMusicListUI,
} from 'store/feature/layout/LayoutSlice';

export const useMusicPageUIControl = () => {
  const dispatch = useAppDispatch();
  const isOpenCustomPlayListUI = useAppSelector((state) => state.layout.customPlayList.isOpen);
  const isOpenAddMusicListUI = useAppSelector((state) => state.layout.customPlayList.addMusicList.isOpen);
  const isOpenMyMusicListUI = useAppSelector((state) => state.layout.customPlayList.myMusicList.isOpen);
  const isOpenMusicFooterUI = useAppSelector((state) => state.layout.footer.isOpen);
  const isSelectedMusicList = useAppSelector((state) => state.layout.main.musicList.selected);
  const isSelectedPlayList = useAppSelector((state) => state.layout.main.playList.selected);

  const onhandlePlayListUI = (isActive: boolean) => {
    dispatch(handlePlayListUI(isActive));
  };

  const onhandleMusicListUI = (isActive: boolean) => {
    dispatch(handleMusicListUI(isActive));
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
    isOpenMusicFooterUI,
    isOpenAddMusicListUI,
    isOpenMyMusicListUI,
    isOpenCustomPlayListUI,
    isSelectedMusicList,
    isSelectedPlayList,
    onhandleOpenMusicFooterUI,
    onhandleOpenMyPlayListUI,
    onhandleOpenAddPlayListUI,
    onhandleOpenCustomPlayListUI,
    onhandlePlayListUI,
    onhandleMusicListUI,
  };
};

export default useMusicPageUIControl;
