/* eslint-disable max-len */
import { rest } from 'msw';
export const hanlders = [
  rest.get('http://localhost:4000/api/music/genre', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          genre: '멜론 TOP 100',
          genre_img:
            'https://i.ytimg.com/vi/fCO7f0SmrDc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHBg8LcdNOe_-2cDY5dcNQqjw70w',
          genre_id: 1,
        },
        {
          genre: 'NCS Top 200 음악',
          genre_img:
            'https://i.ytimg.com/vi/K4DyBUG242c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLDL_rZFJCJ_xo0iKbc0KRhMYuUU7g',
          genre_id: 2,
        },
        {
          genre: 'Mr sucide PlayList',
          genre_img:
            'https://i.ytimg.com/vi/uhA55hYnoHw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLDb06XvGg2OtlQbh8Cr0Ko-ldDfHA',
          genre_id: 3,
        },
      ])
    );
  }),
];
