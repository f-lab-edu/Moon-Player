export type DialogState = {
  alarm: {
    isOpen: boolean;
    text: string;
  };
  confirm: {
    isOpen: boolean;
    message: string;
    isConfirm: boolean;
  };
  music: {
    isOpen: boolean;
    name: string;
    img_url: string;
  };
};
