import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import { handleAlarm } from 'store/feature/layout/LayoutSlice';
export const useAlarm = () => {
  const alarm = useAppSelector((state) => state.layout.alarm);
  const dispatch = useAppDispatch();

  const handleAlarmOpen = (text: string) => {
    dispatch(handleAlarm({ isOpen: true, text }));
  };
  const handleAlarmClose = () => {
    dispatch(handleAlarm({ isOpen: false, text: '' }));
  };

  const isOpen = alarm.isOpen;
  const text = alarm.text;
  return { isOpen, text, handleAlarmOpen, handleAlarmClose };
};

export default useAlarm;
