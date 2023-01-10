import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { handleOpenAlarm, handleOpenUI } from 'store/feature/layout/LayoutSlice';
export const useModal = () => {
  const alarm = useAppSelector((state) => state.layout.alarm);
  const isOpenAlarm = alarm.isOpen;
  const text = alarm.text;

  const isOpenUI = useAppSelector((state) => state.layout.ui.isOpen);
  const dispatch = useAppDispatch();

  const onAlarmOpen = (text: string) => {
    dispatch(handleOpenAlarm({ isOpen: true, text }));
  };

  const onAlarmClose = () => {
    dispatch(handleOpenAlarm({ isOpen: false, text: '' }));
  };
  const onUIClose = () => {
    dispatch(handleOpenUI(false));
  };
  const onUIOpen = () => {
    dispatch(handleOpenUI(true));
  };

  return { isOpenAlarm, isOpenUI, text, onAlarmClose, onAlarmOpen, onUIClose, onUIOpen };
};

export default useModal;
