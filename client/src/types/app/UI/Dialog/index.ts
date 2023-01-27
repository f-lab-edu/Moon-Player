export type ConfirmType = 'Logout' | 'Load' | 'Save';
export type ConfirMessageType = { [K in ConfirmType]: string };

export type DialogState = {
  alarm: {
    isOpen: boolean;
    message: string;
  };
  confirm: {
    isOpen: boolean;
    message: string;
    type: 'Logout' | 'Load' | 'Save' | '';
  };
  music: {
    isOpen: boolean;
    name: string;
    img_url: string;
  };
};
