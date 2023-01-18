/* eslint-disable indent */
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import {
  handleOpenAlarm,
  handleAddMusicListUI,
  handleMyMusicListUI,
  handleOpenMusicFooterUI,
  handleOpenCustomPlayListUI,
} from 'store/feature/layout/LayoutSlice';

export const useUIControl = () => {
  const alarm = useAppSelector((state) => state.layout.alarm);
  const alarmText = alarm.text;
  const isOpenAlarm = alarm.isOpen;
  const isOpenCustomPlayListUI = useAppSelector((state) => state.layout.music.customPlayList.isOpen);
  const isOpenAddMusicListUI = useAppSelector((state) => state.layout.music.customPlayList.addMusicList.isOpen);
  const isOpenMyMusicListUI = useAppSelector((state) => state.layout.music.customPlayList.myMusicList.isOpen);
  const isOpenMusicFooterUI = useAppSelector((state) => state.layout.music.footer.isOpen);
  const dispatch = useAppDispatch();

  const onOpenAlarm = (text: string) => {
    dispatch(handleOpenAlarm({ isOpen: true, text }));
  };

  const onCloseAlarm = () => {
    dispatch(handleOpenAlarm({ isOpen: false, text: '' }));
  };

  const onhandleMusicFooterUI = () => {
    dispatch(handleOpenMusicFooterUI(!isOpenMusicFooterUI));
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
    isOpenAlarm,
    alarmText,
    isOpenMusicFooterUI,
    isOpenAddMusicListUI,
    isOpenMyMusicListUI,
    isOpenCustomPlayListUI,

    onOpenAlarm,
    onCloseAlarm,
    onhandleMusicFooterUI,
    onhandleMyMusicListUi,
    onhandleAddMusicListUI,
    onhandleCustomPlayListUI,
  };
};

export default useUIControl;
