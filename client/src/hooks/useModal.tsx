import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { handleOpenAlarm, handleOpenPlayerUI, handleOpenConfirmUI } from 'store/feature/layout/LayoutSlice';
export const useModal = () => {
  const alarm = useAppSelector((state) => state.layout.alarm);
  const alarmText = alarm.text;
  const isOpenAlarm = alarm.isOpen;
  const isOpenPlayerUI = useAppSelector((state) => state.layout.player.isOpen);
  const isOpenConfirm = useAppSelector((state) => state.layout.confirm.isOpen);
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
  const onOpenConfirmUI = () => {
    dispatch(handleOpenConfirmUI(true));
  };

  const onCloseConfirmUI = () => {
    dispatch(handleOpenConfirmUI(false));
  };

  return {
    isOpenAlarm,
    isOpenPlayerUI,
    alarmText,
    onOpenAlarm,
    onCloseAlarm,
    onOpenPlayerUI,
    onClosePlayerUI,
    onOpenConfirmUI,
    onCloseConfirmUI,
    isOpenConfirm,
  };
};

export default useModal;
