/* eslint-disable max-len */
import { rest } from 'msw';
import music_genre from './data/music_genre.json';
import music_one from './data/1.json';
import music_two from './data/2.json';
import music_three from './data/3.json';
const obj = {
  title: '멜론 Top 100',
  id: 1,
  musics: [
    {
      video_link: 'https://www.youtube.com/watch?v=fCO7f0SmrDc',
      video_title: "(여자)아이들((G)I-DLE) - 'Nxde' Official Music Video",
      video_img:
        'https://i.ytimg.com/vi/fCO7f0SmrDc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHBg8LcdNOe_-2cDY5dcNQqjw70w',
      id: 1,
    },
    {
      video_link: 'https://www.youtube.com/watch?v=BRSARx8wEVk',
      video_title:
        '[스맨파/풀버전] 리더 계급 〈새삥-지코〉 | 바타, 오천, 영제이, 드기, 테드, 트릭스, 백구영, 제이락#스맨파',
      video_img:
        'https://i.ytimg.com/vi/BRSARx8wEVk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC0AndEpjWuOQKHzPx7xFrnmmpsew',
      id: 2,
    },
  ],
};
export const handlers = [
  rest.get('http://localhost:4000/api/music/genre', (req, res, ctx) => {
    return res(ctx.json(music_genre));
  }),

  rest.get('http://localhost:4000/api/music/genre/1', async (req, res, ctx) => {
    return res(ctx.json(music_one));
  }),
  rest.get('http://localhost:4000/api/music/genre/2', (req, res, ctx) => {
    return res(ctx.json(music_two));
  }),
  rest.get('http://localhost:4000/api/music/genre/3', (req, res, ctx) => {
    return res(ctx.json(music_three));
  }),
];
