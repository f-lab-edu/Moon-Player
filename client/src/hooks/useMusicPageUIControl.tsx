/* eslint-disable indent */
import { useAppSelector, useAppDispatch } from 'hooks/useReduxStore';
import {
  handleOpenAddPlayListUI,
  handleOpenMusicFooterUI,
  handleOpenCustomPlayListUI,
  handleMusicListUI,
  handleMyPlayListOptionUI,
} from 'store/feature/layout/LayoutSlice';

export const useMusicPageUIControl = () => {
  const dispatch = useAppDispatch();
  const isOpenCustomPlayListUI = useAppSelector((state) => state.layout.customPlayList.isOpen);
  const isOpenAddMusicListUI = useAppSelector((state) => state.layout.customPlayList.addPlayList.isOpen);
  const isOpenMusicFooterUI = useAppSelector((state) => state.layout.footer.isOpen);
  const isOpenMusicList = useAppSelector((state) => state.layout.main.isOpenMusicList);
  const isOpenMyPlayListOptionUI = useAppSelector((state) => state.layout.customPlayList.myPlayList.option.isOpen);

  const onhandleMusicListUI = (isActive: boolean) => {
    dispatch(handleMusicListUI(isActive));
  };

  const onhandleOpenMusicFooterUI = (isActive: boolean) => {
    dispatch(handleOpenMusicFooterUI(isActive));
  };
  const onhandleOpenAddPlayListUI = (isActive: boolean) => {
    dispatch(handleOpenAddPlayListUI(isActive));
  };

  const onhandleOpenCustomPlayListUI = (isActive: boolean) => {
    dispatch(handleOpenCustomPlayListUI(isActive));
  };
  const onhandleCloseCustomPlayListUI = () => {
    onhandleOpenCustomPlayListUI(false);
    onhandleOpenAddPlayListUI(false);
    dispatch(handleMyPlayListOptionUI(true));
  };
  const onhandleMyPlayListOptionUI = (isActive: boolean) => {
    dispatch(handleMyPlayListOptionUI(isActive));
  };
  return {
    isOpenMusicFooterUI,
    isOpenAddMusicListUI,
    isOpenCustomPlayListUI,
    isOpenMyPlayListOptionUI,
    isOpenMusicList,
    onhandleOpenMusicFooterUI,
    onhandleOpenAddPlayListUI,
    onhandleOpenCustomPlayListUI,
    onhandleCloseCustomPlayListUI,
    onhandleMusicListUI,
    onhandleMyPlayListOptionUI,
  };
};

export default useMusicPageUIControl;
