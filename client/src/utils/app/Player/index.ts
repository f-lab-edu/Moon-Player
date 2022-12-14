import { cloneDeep } from 'lodash';
import { Music } from 'types/store';

export const prevPlayMusic = (playerItems: Music[], music: Music): Music => {
  const prevMusicIndex = playerItems.findIndex((item) => music.name === item.name) - 1;
  return prevMusicIndex < 0 ? playerItems[playerItems.length - 1] : playerItems[prevMusicIndex];
};
export const nextPlayMusic = (playerItems: Music[], music: Music): Music => {
  const nextMusicIndex = playerItems.findIndex((item) => music.name === item.name) + 1;
  return nextMusicIndex < playerItems.length ? playerItems[nextMusicIndex] : playerItems[0];
};

export const shuffleMusic = (playerItems: Music[]): Music[] => {
  const newPlayerItems = cloneDeep(playerItems);
  for (let index = newPlayerItems.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    swapArray(newPlayerItems, index, randomIndex);
  }
  return newPlayerItems;
};
// 리팩토링필요
export const formatTime = (seconds: number): string => {
  if (isNaN(seconds)) {
    return '00:00';
  }
  const date = new Date(seconds * 1000);
  const hh: number = date.getUTCHours();
  const mm: number = date.getUTCMinutes();
  const ss: string = pad(date.getUTCSeconds() as number);
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
};
const pad = (num: number) => ('0' + num).slice(-2);
const swapArray = (newPlayerItems: Music[], index: number, randomIndex: number) =>
  ([newPlayerItems[index], newPlayerItems[randomIndex]] = [newPlayerItems[randomIndex], newPlayerItems[index]]);
