import { useSelector } from 'react-redux';

export const useAlarm = () => {
  const alarm = useSelector((state) => state.layout.alarm);

  const isOpen = alarm.isOpen;
  const text = alarm.text;
  return { isOpen, text };
};

export default useAlarm;
