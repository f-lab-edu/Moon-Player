/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';

const DEFAULT_STATE = {
  isOpen: false,
  text: '',
};
export const AlarmContext = createContext({
  state: DEFAULT_STATE,
  showAlarm: function (text: string) {},
  closeAlarm: function () {},
});
export const AlarmContextProvider = (props) => {
  const [activeAlarm, setActiveAlarm] = useState(DEFAULT_STATE);
  const showAlarmHandler = (text: string) => {
    setActiveAlarm({ isOpen: true, text });
  };

  const closeAlarmHandler = () => {
    setActiveAlarm(DEFAULT_STATE);
  };
  const context = {
    state: activeAlarm,
    showAlarm: showAlarmHandler,
    closeAlarm: closeAlarmHandler,
  };
  return <AlarmContext.Provider value={context}>{props.children}</AlarmContext.Provider>;
};
