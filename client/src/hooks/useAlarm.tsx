import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';
export const useAlarm = () => {
  const alarm = useAppSelector((state) => state.layout.alarm);
  const dispatch = useAppDispatch();

  const handleOpen = (text: string) => {
    dispatch(handleAlarm({ isOpen: true, text }));
  };
  const handleClose = () => {
    dispatch(handleAlarm({ isOpen: false, text: '' }));
  };

  const isOpen = alarm.isOpen;
  const text = alarm.text;
  return { isOpen, text, handleClose, handleOpen };
};

export default useAlarm;
