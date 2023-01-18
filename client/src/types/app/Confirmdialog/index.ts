export type ConfirmType = 'Logout' | 'Save' | 'Load' | '';

export type ConfirmState = {
  isOpen: boolean;
  message: string;
  type: ConfirmType;
};
