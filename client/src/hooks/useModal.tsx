import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { handleOpenAlarm, handleOpenPlayerUI } from 'store/feature/layout/LayoutSlice';
export const useModal = () => {
  const alarm = useAppSelector((state) => state.layout.alarm);
  const alarmText = alarm.text;
  const isOpenAlarm = alarm.isOpen;
  const isOpenPlayerUI = useAppSelector((state) => state.layout.player.isOpen);
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

  return { isOpenAlarm, isOpenPlayerUI, alarmText, onOpenAlarm, onCloseAlarm, onOpenPlayerUI, onClosePlayerUI };
};

export default useModal;
