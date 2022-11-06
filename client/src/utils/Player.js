import { cloneDeep } from 'lodash';

export const prevPlayMusic = (playerItems, music) => {
  const prevMusicIndex = playerItems.findIndex((item) => music.video_title === item.video_title) - 1;
  return prevMusicIndex < 0 ? playerItems[playerItems.length - 1] : playerItems[prevMusicIndex];
};
export const nextPlayMusic = (playerItems, music) => {
  const nextMusicIndex = playerItems.findIndex((item) => music.video_title === item.video_title) + 1;
  return nextMusicIndex < playerItems.length ? playerItems[nextMusicIndex] : playerItems[0];
};

export const shuffleMusic = (playerItems) => {
  const newPlayerItems = cloneDeep(playerItems);
  for (let index = newPlayerItems.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    swapArray(newPlayerItems, index, randomIndex);
  }
  return newPlayerItems;
};

export const formatTime = (seconds) => {
  if (isNaN(seconds)) {
    return '00:00';
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
};
const pad = (string) => ('0' + string).slice(-2);
const swapArray = (newPlayerItems, index, randomIndex) =>
  ([newPlayerItems[index], newPlayerItems[randomIndex]] = [newPlayerItems[randomIndex], newPlayerItems[index]]);
