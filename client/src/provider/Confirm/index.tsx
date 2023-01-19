/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import { ConfirmType, ConfirmState } from 'types/app/Confirmdialog';

//  Dialog로 관리 가능할거같다.
const DEFAULT_STATE: ConfirmState = {
  isOpen: false,
  message: '',
  type: '',
};
export const ConfirmContext = createContext({
  state: DEFAULT_STATE,
  showConfirm: function (message: string, type: ConfirmType) {},
  closeConfirm: function () {},
});

export const ConfirmContextProvider = (props) => {
  const [activeConfirm, setActiveConfirm] = useState(DEFAULT_STATE);

  const showConfirmHandler = (message: string, type: ConfirmType) => {
    setActiveConfirm({ isOpen: true, message, type });
  };

  const closeConfirmHandler = () => {
    setActiveConfirm(DEFAULT_STATE);
  };
  const context = {
    state: activeConfirm,
    showConfirm: showConfirmHandler,
    closeConfirm: closeConfirmHandler,
  };
  return <ConfirmContext.Provider value={context}>{props.children}</ConfirmContext.Provider>;
};
