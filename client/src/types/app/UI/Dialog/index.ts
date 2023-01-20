export type ConfirmType = 'Logout' | 'Save' | 'Load' | '';

export type ConfirmState = {
  isOpen: boolean;
  message: string;
  type: ConfirmType;
};

export type DialogState = {
  alarm: {
    isOpen: boolean;
    text: string;
  };
  confirm: {
    isOpen: boolean;
    message: string;
    type: ConfirmType;
  };
  music: {
    isOpen: boolean;
    name: string;
    img_url: string;
  };
};
