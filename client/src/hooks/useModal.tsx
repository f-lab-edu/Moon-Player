/* eslint-disable indent */
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import {
  handleOpenAlarm,
  handleOpenPlayerUI,
  handleOpenSaveConfirm,
  handleOpenLoadConfirm,
  handleOpenLogOutConfirm,
  handleOpenFooterUI,
} from 'store/feature/layout/LayoutSlice';

type ConfirmType = 'Logout' | 'Save' | 'Load';

export const useModal = () => {
  const alarm = useAppSelector((state) => state.layout.alarm);
  const alarmText = alarm.text;
  const isOpenAlarm = alarm.isOpen;
  const isOpenPlayerUI = useAppSelector((state) => state.layout.player.isOpen);
  const isOpenConfirm = useAppSelector((state) => state.layout.confirm);
  const isOpenFooterUI = useAppSelector((state) => state.layout.footer.isOpen);
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

  const onhandleFooterUI = () => {
    dispatch(handleOpenFooterUI(!isOpenFooterUI));
  };
  const onOpenFooterUI = () => {
    dispatch(handleOpenFooterUI(true));
  };
  const onOpenConfirmUI = (type: ConfirmType) => {
    type === 'Logout'
      ? dispatch(handleOpenLogOutConfirm(true))
      : type === 'Save'
      ? dispatch(handleOpenSaveConfirm(true))
      : dispatch(handleOpenLoadConfirm(true));
  };

  const onCloseConfirmUI = (type: ConfirmType) => {
    type === 'Logout'
      ? dispatch(handleOpenLogOutConfirm(false))
      : type === 'Save'
      ? dispatch(handleOpenSaveConfirm(false))
      : dispatch(handleOpenLoadConfirm(false));
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
    onOpenFooterUI,
    onhandleFooterUI,
    isOpenConfirm,
    isOpenFooterUI,
  };
};

export default useModal;
