import { cloneDeep } from 'lodash'

export const prevPlayMusic = (playerItems, music) => {
  const prevMusicIndex = playerItems.findIndex((item) => music.video_title === item.video_title) - 1
  return prevMusicIndex < 0 ? playerItems[playerItems.length - 1] : playerItems[prevMusicIndex]
}
export const nextPlayMusic = (playerItems, music) => {
  const nextMusicIndex = playerItems.findIndex((item) => music.video_title === item.video_title) + 1
  return nextMusicIndex < playerItems.length ? playerItems[nextMusicIndex] : playerItems[0]
}

export const shuffleMusic = (playerItems) => {
  const newPlayerItems = cloneDeep(playerItems)
  for (let index = newPlayerItems.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    swapArray(newPlayerItems, index, randomIndex)
  }
  return newPlayerItems
}

const swapArray = (newPlayerItems, index, randomIndex) => [newPlayerItems[index], newPlayerItems[randomIndex]] = [newPlayerItems[randomIndex], newPlayerItems[index]]
