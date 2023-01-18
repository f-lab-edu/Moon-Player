/* eslint-disable indent */
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { handleOpenAlarm, handleOpenPlayerUI, handleOpenFooterUI } from 'store/feature/layout/LayoutSlice';

export const useModal = () => {
  const alarm = useAppSelector((state) => state.layout.alarm);
  const alarmText = alarm.text;
  const isOpenAlarm = alarm.isOpen;
  const isOpenPlayerUI = useAppSelector((state) => state.layout.player.isOpen);
  const isOpenFooterUI = useAppSelector((state) => state.layout.footer.isOpen);
  const dispatch = useAppDispatch();

  const onOpenAlarm = (text: string) => {
    dispatch(handleOpenAlarm({ isOpen: true, text }));
  };

  const onCloseAlarm = () => {
    dispatch(handleOpenAlarm({ isOpen: false, text: '' }));
  };
  const onOpenPlayerUI = () => {
    dispatch(handleOpenPlayerUI(true));
  };
  const onClosePlayerUI = () => {
    dispatch(handleOpenPlayerUI(false));
  };

  const onhandleFooterUI = () => {
    dispatch(handleOpenFooterUI(!isOpenFooterUI));
  };
  const onOpenFooterUI = () => {
    dispatch(handleOpenFooterUI(true));
  };
  return {
    isOpenAlarm,
    isOpenPlayerUI,
    alarmText,
    onOpenAlarm,
    onCloseAlarm,
    onOpenPlayerUI,
    onClosePlayerUI,
    onOpenFooterUI,
    onhandleFooterUI,
    isOpenFooterUI,
  };
};

export default useModal;
