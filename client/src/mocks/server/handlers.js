/* eslint-disable max-len */
import { rest } from 'msw';
import music_genre from './data/music_genre.json';
import music_one from './data/1.json';
import music_two from './data/2.json';
import music_three from './data/3.json';

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

  rest.post('http://localhost/auth/google', (req, res, ctx) => {
    const token = {
      access_token: 'google',
    };
    return res(ctx.json(token));
  }),
  rest.post('http://localhost/auth/kakao', (req, res, ctx) => {
    const token = {
      access_token: 'Kakao',
    };
    return res(ctx.json(token));
  }),
];
