/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import { DialogState } from 'types/app/UI/Dialog';

const DEFAULT_STATE: DialogState = {
  alarm: {
    isOpen: false,
    text: '',
  },
  confirm: {
    isOpen: false,
    message: '',
    isConfirm: false,
  },
  music: {
    isOpen: false,
    name: '',
    img_url: '',
  },
};
export const DiaLogContext = createContext({
  state: DEFAULT_STATE,
  showAlarm: function (text: string) {},
  closeAlarm: function () {},
  showConfirm: function (message: string) {},
  closeConfirm: function () {},
  showMusicDialog: function (name: string, img_url: string) {},
  closeMusicDialog: function () {},
  handleConfirmState: function (isConfirm: boolean) {},
});
export const DiaLogContextProvider = (props) => {
  const [activeDialog, setActiveDialog] = useState<DialogState>(DEFAULT_STATE);
  const showAlarmHandler = (text: string) => {
    setActiveDialog((prev) => ({
      ...prev,
      alarm: {
        isOpen: true,
        text,
      },
    }));
  };
  const closeAlarmHandler = () => {
    setActiveDialog((prev) => ({
      ...prev,
      alarm: {
        isOpen: false,
        text: '',
      },
    }));
  };

  const showConfirmHandler = (message: string) => {
    setActiveDialog((prev) => ({
      ...prev,
      confirm: {
        isOpen: true,
        message,
        isConfirm: activeDialog.confirm.isConfirm,
      },
    }));
  };

  const closeConfirmHandler = () => {
    setActiveDialog((prev) => ({
      ...prev,
      confirm: {
        isOpen: false,
        message: '',
        isConfirm: activeDialog.confirm.isConfirm,
      },
    }));
  };
  const confirmStateHandler = (isConfirm: boolean) => {
    setActiveDialog((prev) => ({
      ...prev,
      confirm: {
        isOpen: false,
        message: '',
        isConfirm: isConfirm,
      },
    }));
  };

  const showMusicDialogHandler = (name: string, img_url: string) => {
    setActiveDialog((prev) => ({
      ...prev,
      music: {
        isOpen: true,
        name,
        img_url,
      },
    }));
  };
  const closeMusicDialogHandler = () => {
    setActiveDialog((prev) => ({
      ...prev,
      music: {
        isOpen: false,
        name: '',
        img_url: '',
      },
    }));
  };
  const context = {
    state: activeDialog,
    showAlarm: showAlarmHandler,
    closeAlarm: closeAlarmHandler,
    showConfirm: showConfirmHandler,
    closeConfirm: closeConfirmHandler,
    showMusicDialog: showMusicDialogHandler,
    closeMusicDialog: closeMusicDialogHandler,
    handleConfirmState: confirmStateHandler,
  };
  return <DiaLogContext.Provider value={context}>{props.children}</DiaLogContext.Provider>;
};
