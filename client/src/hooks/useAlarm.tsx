import { useAppSelector } from 'hooks/useAppDispatch';
export const useAlarm = () => {
  const alarm = useAppSelector((state) => state.layout.alarm);

  const isOpen = alarm.isOpen;
  const text = alarm.text;
  return { isOpen, text };
};

export default useAlarm;
